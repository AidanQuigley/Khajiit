import NextAuth from 'next-auth'
import { AuthOptions } from 'next-auth'
//import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from 'lib/prisma'
import bcrypt from 'bcrypt'

/** Main authentication file that handles all user loggins in the backend 
 * Uses Credentials Provider only atm which causes problems with moderator roles explained in the first/main page.js file
*/

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    CredentialsProvider ({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@email.com"},
        password: { label: "Password", type: "password"},
        //username: { label: "Username", type: "text", placeholder: "Username"},
      },
      profile(profile) {
        let userRole = "user"
        if (profile?.email == "b@b.b") {
          userRole = "moderator";
        }
        return { 
          ...profile,
          isModerator: userRole,
        }
      },
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      async authorize(credentials) {
          if(!credentials.email || !credentials.password) {
              throw new Error('Please fill out all fields')
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });

          if (!user || !user.hashedPassword) {
            throw new Error('No user found')
          }

          const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

          if (!passwordMatch) {
            throw new Error('Incorrect Password')
          }

          return user;
      }
    })
  ],

  //database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  callbacks: {
    async jwt({token, user}) {
      if(user) token.isModerator = user.isModerator
      return token
    },
    async session({session, token}) {
      if(session?.user) session.user.isModerator = token.isModerator
      return session
    },
  },

  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}