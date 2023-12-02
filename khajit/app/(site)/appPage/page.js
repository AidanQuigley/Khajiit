'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faArrowsUpDown,
  faArrowUp,
  faArrowDown,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";

export const comments = [];
comments[1] = "This app is awesome!";
comments[2] = "This app sucks!";
comments[3] = "Can't believe this app exists?!";
comments[4] = "This app could've been done better.";




function addComent(comment){
    comments[comments.length+1] = comment;
}


function removeComment(comment){
    comments.splice(comment, 1);
}

export default function appPage(){
    const toggleDisplay = () => setDisplay(!isDisplay);
    const searchParams = useSearchParams();
    //comment that the user wants to submit
    const [comment, setComment] = useState('');

    //this is used to add a comment, but since currently the comments are 
    //in an array in the page, it won't show on the site.
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        addComent(comment);
    }

    return (
        <>
            <div className='titleWrap mb-4'>
                <Link href='/'>
                <h1 className='title font-bold'>{searchParams.get('Name')}</h1>
                </Link>
            </div>

            <div className='bg-snow m-auto w-10/12 border-snow text-jet'>
                <div className='m-2'>
                    <h1 className='justify-center text-center font-bold text-cardinal flex'>{searchParams.get('Name')}</h1>
                    <h1 className='flex'>Price: ${searchParams.get('Price')}</h1>
                    <h1>User Ratings: {searchParams.get('Rating')}/5</h1>
                    <h1>Device Platform(s): {searchParams.get('Platform')}</h1>
                    <h1>Opperating Systems: {searchParams.get('RequiredSystem')}</h1>
                    <h1>Number of Downloads: {searchParams.get('Download')}</h1>
                </div>

                <h1 >
                    Comments: 
                </h1>
                {
                //This form is for where the comments get submitted.
                }
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    comment="Comment"
                    onChange={(e) => setComment(e.target.value)}
                    />
                    <br/>
                    <button type="submit" >
                        Post Comment
                    </button>
                </form>
                <ul>
                    {comments.map(comments =>
                        <div>
                        <li>
                            {comments} 
                            {searchParams.get("ifModerator") &&
                            //this is supposed to delete some comments but it breaks when used due to Next.JS testing.
                            <button onClick={removeComment(comments)}> 
                                Delete
                            </button>
                            }
                        </li>
                        </div>
                        )}
                </ul>
            </div>
            <div className='relative w-1/12 m-auto text-center justify-center'>
                <Link href='/'>
                    <div className="bg-cardinal rounded-lg text-snow p-2"><FontAwesomeIcon icon={faHouse} /> Go Back </div>
                </Link>
            </div>
        </>
    );
}