'use client'

import { signOut } from "next-auth/react";

export default function LogOut() {

    const logoutUser = async (e) => {
        e.preventDefault()
        signOut('credentials', {redirect: true, callbackUrl: '/'})
        .then(() => toast.success('User has been logged out!'))
    }
    return (
        <>
            <div className='createAcc'>
                <button className='text-snow font-bold' onClick={logoutUser}>Logout</button>
            </div>
        </>
    );
}