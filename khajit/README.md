#### Created by Berk Software - Group 16
####
#### Miami University CSE 201 - Fall 2023
#### Instructor: Hakam Alomari, Ph.D.
####
#### Project Developers: Aidan Quigley, Griff Decker, Jackson Little, Quinn Connolly
#### 
#### Khajiit - App Catalog
#### 
#### This project was created with the Nextjs framework utilizing NextAuth for authentication and registering/logging in,
#### Prisma for connecting our project to an online database, Supabase for hosting our online database, PostgreSQL as our
#### SQL database, tailwind for styling purposes, and a few smaller programs/resources such as FontAwesome and Axios
#### 
#### Last Updated 1 December, 2023


### Get started:
- Download and install Nodejs to your system/computer
- Recommended to open project in Visual Studio Code
- Make sure you are in the second 'khajit' directory folder (ex C:\Users\asq91\Documents\GitHub\Kahjit\khajit) ie 'cd ./khajit'
- If any errors occur, install NextJS to the project on your end using 'npm install next -g' in the above directroy ^
- or 'npm i' to update if any libraries were added in
- Use the command: 'npm run dev' to run the dev environment
- Open [http://localhost:3000] in any browser(recomend chrome) to view result

- Page.js is the 'home' file in which the website starts and is entirely server side rendered
- Layout.js is like a global javascript file where you include global elements that you want to see on every page like navigation, footers, etc.
- Any other js file not in a folder are mostly client sided components with an exception of one file

### Folders and Files Context
- The '(site)' folder is for adding different pages to the site.
    - Each new page gets its own folder with the main file being a 'page.js' file
- The 'api' folder is for everything API routing including authentication(NextAuth)/user login/registration
- The 'context' folder is for contextual files that are necessary for the 'layout.js' file
- 'globals.css' is a css file that globally defines top level elements (body,html,h1,h2,p,etc.) but NOT class or id (.whatever or #whatever)
- 'layout.js' file is like a global page where you include global elements that you want to see on every page like navigation, footers, etc.
- 'page.js' file is the index/homepage and is required to be called 'page.js'
- The 'lib' folder is just being used for the prisma library
- The 'prisma' folder currently holds all of the data information for users, login info and whatnot
- The 'node_modules' folder contains the entire library of node files that are needed to run the program including added 3rd party libraries
- '.env' file is the environments file that includes information for other resoruces and environments
- '.gitignore' file is what hides importan files from github
- 'jsconfig.json' file just contains a line to set the baseURL to '.' so you don't have to reference 
    files using '../../../api' and can just do 'api'

### Other used libraries
- Nextjs - This entire program is built upon Nextjs. Allows for fast client and server side rendering and just makes everything easier
- NextAuth - Authentication for creating users and logging in and out
- Prisma - Used to connect database to program
- PostgreSQL - Used to setup users information
- Tailwind - Improved CSS library/manager
- React Hot Toast - Notification system for errors, popups, etc.
- Axios - Differing fetch system from that of NextJS' that fetches data
- FontAwesome - Library of icons

### Resources:
- Authentication video: https://www.youtube.com/watch?v=PrdbyNYq-z4&t=2s
- Supabase: Where I'm holding user database

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
