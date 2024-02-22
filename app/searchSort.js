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

/** Visual Search Sort Function that currently only displays visual of sorting function without much functionality
 *  besides changing of styling when buttons are clicked
 */
export default function SearchSort() {
    const [isShowSort, setShowSort] = useState(false);
    const toggleShowSort = () => setShowSort(!isShowSort);

    const [whatSort, setWhatSort] = useState(0);
    
    const clickPrice = () => {
        if (whatSort === 1) {
            setWhatSort(2);
        } else if (whatSort === 2) {
            setWhatSort(0);
        } else {
            setWhatSort(1);
        }
    }

    const clickRatings = () => {
        if (whatSort === 3) {
            setWhatSort(4);
        } else if (whatSort === 4) {
            setWhatSort(0);
        } else {
            setWhatSort(3);
        }
    }

    const clickAlphabetical = () => {
        if (whatSort === 5) {
            setWhatSort(6);
        } else if (whatSort === 6) {
            setWhatSort(0);
        } else {
            setWhatSort(5);
        }
    }

    const clickDatePublished = () => {
        if (whatSort === 7) {
            setWhatSort(8);
        } else if (whatSort === 8) {
            setWhatSort(0);
        } else {
            setWhatSort(7);
        }
    }

    const clickFreeOrPaid = () => {
        if (whatSort === 9) {
            setWhatSort(10);
        } else if (whatSort === 10) {
            setWhatSort(0);
        } else {
            setWhatSort(9);
        }
    }

    return (
        <>
            <div className='searchBar flex h-10 text-lg justify-center text-center leading-10'>
                <h1 className='bg-snow w-2/12 h-full text-jet font-bold rounded-tl-lg'>Catalog Search</h1>
                <input className='bg-jet w-6/12 border-none ring-inset ring-2 ring-snow focus:ring-inset focus:ring-2 focus:ring-snow' type="text" placeholder="search.."/>
                <div className='sortDropWrap bg-snow w-2/12 h-full text-jet hover:text-cardinal hover:bg-snowdarker font-bold hover:cursor-pointer' onClick={toggleShowSort}>
                    Sort
                </div>
                {/*<button className='bg-snow w-1/12 h-full text-jet hover:text-cardinal hover:bg-snowdarker font-bold'><FontAwesomeIcon icon={faBookmark} /></button>*/}
                <button className='bg-cardinal w-2/12 rounded-tr-lg h-full text-snow font-bold hover:bg-rustyred'>Search</button>
            </div>

            {isShowSort && (
                <div className='sortOptions bg-snowdarker w-full border-4 border-snow text-jet'>
                    <div className='optionsWrap flex m-2'>
                        <div className='sortOption p-3'>Sort Options: </div>
                        <button onClick={clickPrice} className={whatSort === 1 || whatSort === 2 ? ( whatSort === 1 ? 'bg-rustyred text-snow rounded-lg p-3 mr-2' : 'bg-jet text-snow rounded-lg p-3 mr-2') : 'sortOption bg-snow text-jet hover:ring-cardinal hover:ring-2 hover:ring-inset rounded-lg p-3 mr-2'}>
                            Price {whatSort != 1 && whatSort != 2 && ( <FontAwesomeIcon icon={faArrowsUpDown} />)}
                            {whatSort == 1 && ( <FontAwesomeIcon icon={faArrowUp} />)}
                            {whatSort == 2 && ( <FontAwesomeIcon icon={faArrowDown} />)}
                        </button>
                        <button onClick={clickRatings} className={whatSort === 3 || whatSort === 4 ? ( whatSort === 3 ? 'bg-rustyred text-snow rounded-lg p-3 mr-2' : 'bg-jet text-snow rounded-lg p-3 mr-2') : 'sortOption bg-snow text-jet hover:ring-cardinal hover:ring-2 hover:ring-inset rounded-lg p-3 mr-2'}>
                            Ratings {whatSort != 3 && whatSort != 4 && ( <FontAwesomeIcon icon={faArrowsUpDown} />)}
                            {whatSort == 3 && ( <FontAwesomeIcon icon={faArrowUp} />)}
                            {whatSort == 4 && ( <FontAwesomeIcon icon={faArrowDown} />)}
                        </button>
                        <button onClick={clickAlphabetical} className={whatSort === 5 || whatSort === 6 ? ( whatSort === 5 ? 'bg-rustyred text-snow rounded-lg p-3 mr-2' : 'bg-jet text-snow rounded-lg p-3 mr-2') : 'sortOption bg-snow text-jet hover:ring-cardinal hover:ring-2 hover:ring-inset rounded-lg p-3 mr-2'}>
                            A-Z {whatSort != 5 && whatSort != 6 && ( <FontAwesomeIcon icon={faArrowsUpDown} />)}
                            {whatSort == 5 && ( <FontAwesomeIcon icon={faArrowUp} />)}
                            {whatSort == 6 && ( <FontAwesomeIcon icon={faArrowDown} />)}
                        </button>
                        <button onClick={clickDatePublished} className={whatSort === 7 || whatSort === 8 ? ( whatSort === 7 ? 'bg-rustyred text-snow rounded-lg p-3 mr-2' : 'bg-jet text-snow rounded-lg p-3 mr-2') : 'sortOption bg-snow text-jet hover:ring-cardinal hover:ring-2 hover:ring-inset rounded-lg p-3 mr-2'}>
                            Release Date {whatSort != 7 && whatSort != 8 && ( <FontAwesomeIcon icon={faArrowsUpDown} />)}
                            {whatSort == 7 && ( <FontAwesomeIcon icon={faArrowUp} />)}
                            {whatSort == 8 && ( <FontAwesomeIcon icon={faArrowDown} />)}
                        </button>
                        <button onClick={clickFreeOrPaid} className={whatSort === 9 || whatSort === 10 ? (whatSort === 9 ? 'bg-rustyred text-snow rounded-lg p-3 mr-2' : 'bg-jet text-snow rounded-lg p-3 mr-2') : 'sortOption bg-snow text-jet hover:ring-cardinal hover:ring-2 hover:ring-inset rounded-lg p-3 mr-2'}>
                            Free or Paid {whatSort != 9 && whatSort != 10 && ( <FontAwesomeIcon icon={faArrowsUpDown}/>)}
                            {whatSort == 9 && ( <FontAwesomeIcon icon={faArrowUp}/>)}
                            {whatSort == 10 && ( <FontAwesomeIcon icon={faArrowDown}/>)}
                        </button>
                    </div>
                </div>
                )
            }
        </>
    );
}