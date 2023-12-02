'use client'

import { signOut } from "next-auth/react";

/** Visual button for logging out of the app that displays only if user is logged in */

export default function LogOut() {

    const logoutUser = async (e) => {
        e.preventDefault()
        signOut('credentials', {redirect: true, callbackUrl: '/'})
        .then(() => toast.success('User has been logged out!'))
    }
    return (
        <>
            <div className='createAcc ml-3'>
                <button className='text-snow font-bold' onClick={logoutUser}>Logout</button>
            </div>
        </>
    );
}