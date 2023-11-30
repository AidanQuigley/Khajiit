'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faArrowsUpDown,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import prisma from 'lib/prisma';

export default function AddPopUp() {
    
    const [isDisplay, setDisplay] = useState(false);
    const toggleDisplay = () => setDisplay(!isDisplay);



    return (
        <>
            <div onClick={toggleDisplay}>More Info</div>
            <div className='w-full absolute left-0 top-0 overflow-hidden'>
                {isDisplay && (
                    <div className='bg-snowdarker bg-opacity-30 w-full h-full border-4 border-snow text-jet'>
                        <div className='bg-snowdarker w-6/12 h-5 flex m-2'>
                            <h1>Yeah</h1>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    );
}