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
import { useSearchParams } from 'next/navigation'
import Link from "next/link";

export default function appPage(){
    const toggleDisplay = () => setDisplay(!isDisplay);
    const searchParams = useSearchParams();
    return (
        <>
            <div className='titleWrap mb-4'>
                <Link href='/'>
                <h1 className='title font-bold'>Welcome to <span style={{color: '#C42847'}}>Khajiit</span></h1>
                </Link>
            </div>

            <div className='bg-snow m-auto w-10/12 border-snow text-jet'>
                <div className='h-5 flex m-2'>
                    <h1>Yeah</h1>
                    <h1>{searchParams.get('Name')}</h1>
                    <h1>${searchParams.get('Price')}</h1>
                    <h1>{searchParams.get('Rating')}/5</h1>
                    <h1>{searchParams.get('Platform')}</h1>
                    <h1>{searchParams.get('Download')}</h1>
                    <h1>{searchParams.get('RequiredSystem')}</h1>
                </div>
            </div>
        </>
    );
}