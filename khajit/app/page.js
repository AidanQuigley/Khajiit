import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import LogOut from './logout'

export default async function Home() {
  const session = await getServerSession(authOptions)
  //Login Session Handling
  
  return (
    <main>
      {/*Temporary: Prints out user session when signed in*/}
      {session ? (
        <div>
          <pre>{JSON.stringify(session)}</pre>
          <LogOut></LogOut>
        </div>
      ) : (
        <div>

        </div>
      )}
      <Link href='FrontPage'>
        <div>
          <h1>Front Page</h1>
        </div>
      </Link>
      {!session ? (
      <div>
        <Link href='register'>
          <div>
            <h1>Registration Page</h1>
          </div>
        </Link>
        <Link href='login'>
          <div>
            <h1>Login Page</h1>
          </div>
        </Link>
      </div>
      ) : (
        <div></div>
      )}
    </main>
  )
}
