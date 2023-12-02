import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import LogOut from './logout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import prisma from 'lib/prisma'
import {
  faUser,
  faBookmark,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import SearchSort from './searchSort';
import AddPopUp from './addPopUp';
import AddApp from './AddApp'

/** Created by Berk Software - Group 16 for CSE 201
 * Aidan Quigley, Griff Decker, Jackson Little, Quinn Connolly
 * 
 * Khajiit - App Catalog
 * 
 * This project was created with the Nextjs framework utilizing NextAuth for authentication and registering/logging in,
 * Prisma for connecting our project to an online database, Supabase for hosting our online database, PostgreSQL as our
 * SQL database, tailwind for styling purposes, and a few smaller programs/resources such as FontAwesome and Axios
 * 
 * Last Updated 1 December, 2023
*/

// This file is what is initially displayed to the user and serves as the homepage

export default async function Home() {
  //Login Session Handling
  const session = await getServerSession(authOptions)

  //Checks if user has moderator role
  // We cannot use isModerator as we would have to modify the callbacks in 'auth/[...nextauth]' to include the
  // isModerator callback, however the current user registration with the CredentialsProvider does not allow us
  // to modify these callbacks in an easy and time-manageable way, so this would require us to redo the entire login
  // system using the GoogleProvider or GitProvider for registration/logging in with nextauth
    //console.log(session?.user.isModerator)
    //const mod = session.user.isModerator;

  // Counts number of objects in the apps table
  var appCount = await prisma.apps.count();

  // Function to remove an app from the database
  /*function removeApp(removeId) {
    const app = prisma.Apps.delete({
      where: {
        id: removeId,
      }
    })
  }*/

  // Lists out all of the apps from the database and assigns them into an array
  const apps = [];
  for (let i = 1; i <= appCount; i++) {
    const app = await prisma.Apps.findUnique({
        where: {
            id: i,
        },
    })
    
    apps[i] = app;
  }

  // VISUAL STUFF, HTML
  return (
    <main>
      <title>Khajiit</title>
      
      {/** Top title of Page */}
      <div className='titleWrap'>
        <Link href='/'>
          <h1 className='title font-bold'>Welcome to <span style={{color: '#C42847'}}>Khajiit</span></h1>
        </Link>
      </div>
      
      <div className='accountNav'>
        {/*Checks status of user ? (Shows up if you are logged in) : (Shows up if not logged in)*/}
        {session ? (
          <div className='accountWrap rounded-lg'>
            {/*<pre>{JSON.stringify(session)}</pre>*/}
            <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#2a2b2a", padding: "12px 5px 5px 15px", marginRight: "20px"}} />
            <h1 className='text-jet text-lg mt-auto mb-auto'>Welcome, {session.user.name} </h1>
            <LogOut></LogOut>
          </div>
        ) : (
          <div className='accountWrap rounded-lg'>
            <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#2a2b2a", padding: "12px 5px 5px 15px", marginRight: "20px"}} />
            <Link href='register'>
            <div className='createAcc'>
              <h1 className='font-bold'>Create Account</h1>
            </div>
            </Link>
            <div className='loginAcc'>
              <Link href='login'>
                <h1 className='font-bold'>Login</h1>
              </Link>
            </div>  
          </div>
        )}
      </div>

      {/**Calls the Sorting file which holds all of the client side visualization*/}
      <SearchSort/>

      <div className='catalog bg-snow w-full'>
        {/*Checks status of user ? (Shows up if you are logged in) : (Shows up if not logged in)*/}
        {session ? (
          <div className='catalogWrap p-4'>
          <div className='catalogLogin border-4 bg-snowdarker rounded-lg w-10/12 m-auto'>
            <ul> 
            { apps.map(apps =>
              <li key ={apps.id}>
                <div className=''></div>
                <div className='text-cardinal inline mr-3'>{apps.Name}</div>
                <div className='text-orangeweb inline'><FontAwesomeIcon icon={faStar} /> {apps.Rating}/5 </div>
                {/* RemoveApp Button
                session?.user.email == 'b@b.b' && (
                  <div onClick={removeApp(apps.id)} className='text-snow inline float-right bg-cardinal hover:bg-rustyred rounded-lg pl-1 pr-1 ml-2'>REMOVE</div>
                )*/}
                <Link href={{
                  pathname: '/appPage',
                  query: {
                    Name: apps.Name,
                    Price: apps.Price,
                    Rating: apps.Rating,
                    Platform: apps.Platform,
                    Download: apps.Download,
                    RequiredSystem: apps.RequiredSystem,
                    ifModerator: session.user.isModerator,
                  }
                }}>
                  {/*<AddPopUp/>*/}
                  <div className='text-cardinal inline float-right'>More</div>
                </Link>
                <hr className='border-2 border-snow'></hr>
              </li>
            )}
            </ul>
          </div>
        </div>
        ) : (
          <div className='catalogWrap p-4 justify-center text-center'>
            <div className='catalogLogin justify-center text-center border-4 bg-snowdarker rounded-lg w-6/12 m-auto'>
              <h1 className='text-jet text-4xl mt-4'>
                <Link href='/login' className='hover:text-cardinal font-bold'>Login </Link>
                or
                <Link href='/register' className='hover:text-cardinal font-bold'> Signup</Link>
              </h1>
              <h3 className='text-jet mt-4 mb-4'>To View Our Extensive Catalog of Apps</h3>
            </div>
          </div>
        )}
      </div>

      {/**Calls the AddApp.js file for client side rendering to allow Moderators to add apps to catalog */}
      <div className='w-full'>
        {session?.user.email == 'b@b.b' && (
          <AddApp/>
        )}
      </div>

    </main>
  )
}
