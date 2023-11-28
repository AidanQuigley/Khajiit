'use client'

import React from 'react'; 
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css';
import Page from './page';
export default function popup() {
    
    return (
        <>
            <Popup trigger={<button><li key ={Page.apps.id}>{Page.apps.Name}</li></button>}>
                  <div>
                    <li>Price: ${Page.apps.Price}</li>
                    <li>Ratings: ${Page.apps.Rating}</li>
                  </div>
               </Popup> 
        </>
    );
}