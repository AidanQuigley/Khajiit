import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {

    switch(req.method) {
        case 'POST':
            // Update/Create data in database
            const {appName, type, price, device, os,} = req.body
            const apps = await prisma.apps.create({
                data: {
                    Name: appName,
                    Type: type,
                    Price: price,
                    Platform: device,
                    RequiredSystem: os,
                    Rating: 0.0,
                    Download: 0,
                }
            })
            res.status(201).json(POST)
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end('Method ${method} Not Allowed')
    }
}