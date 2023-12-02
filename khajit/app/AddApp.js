"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faArrowsUpDown,
  faArrowUp,
  faArrowDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import prisma from 'lib/prisma';
import { useSearchParams } from 'next/navigation'
import axios from "axios";
import ServerCreateApp from './serverCreateApp'


/** AddApp displays the form to add additional apps from the moderator's perspective
 *  and also sends the data to it's server-sided file, serverCreateApp.js
 */
export default function AddApp() { 
    const [isDisplay, setDisplay] = useState(false);
    const toggleDisplay = () => setDisplay(!isDisplay);

    const [appName, setAppName] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [device, setDevice] = useState('');
    const [os, setOS] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        

        const newapp = {
            appName, type, price, device, os,
        }

        ServerCreateApp(newapp)
    }
    
    return (
        <>
            <div onClick={toggleDisplay} className='bg-cardinal w-full'>
                <div className='AddApp p-1 justify-center text-center'>
                    <div className='w-full'>
                    <h1 className='font-bold'><FontAwesomeIcon icon={faPlus} /> Add App</h1>
                    </div>
                </div>
            </div>
            <div className=''>
                {isDisplay && (
                    <div className='bg-jetdarker w-full text-snow ring-inset ring-2 ring-cardinal'>
                        <form onSubmit={handleSubmit} className="w-10/12 m-auto p-2">
                            <label>
                                <p className='font-bold text-cardinal'>Name: </p>
                                <input 
                                    onChange={(e) => setAppName(e.target.value)} 
                                    type='text'
                                    className="block w-full rounded-md border-0 py-1.5 text-jet shadow-sm ring-1 ring-inset ring-jet placeholder:text-jet focus:ring-2 focus:ring-inset focus:ring-cardinal sm:text-sm sm:leading-6" 
                                    placeholder="enter name...">
                                </input>
                            </label>
                            <hr className='border-2 border-jet'></hr>

                            <label>
                                <p className='font-bold text-cardinal'>Price: </p>
                                <input 
                                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                                    type='text'
                                    className="block w-full rounded-md border-0 py-1.5 text-jet shadow-sm ring-1 ring-inset ring-jet placeholder:text-jet focus:ring-2 focus:ring-inset focus:ring-cardinal sm:text-sm sm:leading-6" 
                                    placeholder="enter price...">
                                </input>
                            </label>
                            <hr className='border-2 border-jet'></hr>

                            <label>
                                <p className='font-bold text-cardinal'>Genre: </p>
                                <select 
                                    onChange={(e) => setType(e.target.value)} 
                                    value={type} 
                                    className="block w-full rounded-md border-0 py-1.5 text-jet shadow-sm ring-1 ring-inset ring-jet placeholder:text-jet focus:ring-2 focus:ring-inset focus:ring-cardinal sm:text-sm sm:leading-6">
                                    <option value="music">Music</option>
                                    <option value="fitness">Fitness</option>
                                    <option value="game">Game</option>
                                    <option value="store">Store</option>
                                    <option value="chat">Chat</option>
                                    <option value="lifestyle">Lifestyle</option>
                                </select>
                            </label>
                            <hr className='border-2 border-jet'></hr>

                            <label>
                                <p className='font-bold text-cardinal'>Platform/Device: </p>
                                <select 
                                    onChange={(e) => setDevice(e.target.value)} 
                                    value={device} 
                                    className="block w-full rounded-md border-0 py-1.5 text-jet shadow-sm ring-1 ring-inset ring-jet placeholder:text-jet focus:ring-2 focus:ring-inset focus:ring-cardinal sm:text-sm sm:leading-6">
                                    <option value="computer">Computer</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="all">All</option>
                                </select>
                            </label>
                            <hr className='border-2 border-jet'></hr>

                            <label>
                                <p className='font-bold text-cardinal'>Operating System: </p>
                                <select 
                                    onChange={(e) => setOS(e.target.value)} 
                                    value={os} 
                                    className="block w-full rounded-md border-0 py-1.5 text-jet shadow-sm ring-1 ring-inset ring-jet placeholder:text-jet focus:ring-2 focus:ring-inset focus:ring-cardinal sm:text-sm sm:leading-6">
                                    <option value="IOS">IOS</option>
                                    <option value="android">Android</option>
                                    <option value="windows">Windows</option>
                                    <option value="macOS">MacOS</option>
                                    <option value="IOS and android">IOS & Android</option>
                                    <option value="windows and macOS">Windows & MacOS</option>
                                    <option value="all">All</option>
                                </select>
                            </label>
                            <hr className='border-2 border-jet'></hr>

                            <button type="submit" className="flex w-full justify-center rounded-md bg-cardinal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rustyred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-snow">Add New App</button>
                        </form>
                    </div>
                    )
                }
            </div>
        </>
    );
}