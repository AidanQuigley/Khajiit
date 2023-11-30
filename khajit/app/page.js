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
} from "@fortawesome/free-solid-svg-icons";
import SearchSort from './searchSort';
import AddPopUp from './addPopUp';

export const apps = [];
for (let i = 1; i < 11; i++) {
    const app = await prisma.Apps.findUnique({
        where: {
            id: i,
        },
    })
    
    apps[i] = app;
  }

  async function appInfo(int){
      
      const app = int;

      return(
        <p>
          ${app.Price} {app.Rating}/5 {app.Platform} {app.Download} {app.RequiredSystem}
        </p>
      )
  }
export default async function Home() {
  const session = await getServerSession(authOptions)
  //Login Session Handling

  console.log(session?.user.isModerator)
  //const mod = session.user.isModerator;
 
  return (
    <main>
      
      <div className='titleWrap'>
        <Link href='/'>
          <h1 className='title font-bold'>Welcome to <span style={{color: '#C42847'}}>Khajiit</span></h1>
        </Link>
      </div>
      
      <div className='accountNav'>
        {/*Shows up if you are logged in*/}
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

      <SearchSort/>

      <div className='catalog bg-snow w-full'>
        {/*Shows up if you are logged in*/}
        {session ? (
          <div className='catalogWrap p-4 justify-center text-center'>
          <div className='catalogLogin justify-center text-center border-4 bg-snowdarker rounded-lg w-6/12 m-auto'>
            <ul>
              {apps.map(apps =>
                  <li key ={apps.id}>
                    <div className='text-cardinal inline'>{apps.Name}</div> 
                    {appInfo(apps)}
                    <AddPopUp></AddPopUp>
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
      <div className='bg-cardinal w-full'>
        {session?.user.isModerator ? (
          <div className='AddApp p-1 justify-center text-center'>
            <div className='w-full'>
              <h1 className='font-bold'><FontAwesomeIcon icon={faPlus} /> Add App</h1>
            </div>
          </div>
        ):(
          <div>
          </div>
        )}
      </div>

    </main>
  )
}
