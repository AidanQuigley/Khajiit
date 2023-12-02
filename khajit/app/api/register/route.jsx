import bcrypt from 'bcrypt'
import prisma from 'lib/prisma'
import { NextResponse } from 'next/server'

/** Registration file that handles all registration of users in backend */

export async function POST(request) {
    /**Need to await request */
    const body = await request.json();
    const { name, email, password } = body;

    {/*Checks if fields are filled out*/}
    if(!name || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    {/*Checks if email already exists*/}
    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    })
    {/*If does exist, throw error*/}
    if(exist) {
        throw new Error('Email already exists')
    }

    {/**Hash password using bcrypt */}
    const hashedPassword = await bcrypt.hash(password, 10);
    {/**Create's user in database*/}
    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            //isModerator: false,
        }
    });
    {/**Return's user with next response and user*/}
    return NextResponse.json(user);
}