'use server'

import prisma from "lib/prisma";

/** Server side for AddApp.js file that takes data from form in that file 
 *  and adds to database using prisma
 */

export default async function serverCreateApp(newapp) {
    
    var appCount = await prisma.apps.count();
    return await prisma.apps.create({
        data: {
            id: appCount + 1,
            Name: newapp.appName,
            Type: newapp.type,
            Price: parseFloat(newapp.price),
            Platform: newapp.device,
            RequiredSystem: newapp.os,
            Rating: 0.0,
            Download: 0,
        }
    })

}