'use client'

import React from "react";
import Link from "next/link";

/** Footer componenet that is added onto every page using the layout.js file */

export default function Footer() {
    return(
        <React.Fragment>
            <div className='flex mt-20'></div>
            <div className='absolute w-full bottom-0 justify-center text-center bg-jetdarker'>
                <h1 className='text-2xl font-bold text-cardinal'><Link className='hover:text-rustyred' href='/'>Khajiit</Link></h1>
                <h3 className='text-xs mb-2'>Made by Aidan Quigley, Griff Decker, Jackson Little, and Quinn Connolly</h3>
            </div>
        </React.Fragment>
    );
}