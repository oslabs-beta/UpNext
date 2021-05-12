const indexString = `import Link from 'next/link';
import React from "react";
import {signIn, signOut, useSession} from "next-auth/client";

// This function will return the homepage of the website
function HomePage() {
  // Using a react hook, we create a session and loading hooks
  const [session, loading] = useSession();

  return (
    <main>
      // If the session returns false, the user is not logged in
      // This will the display the following html at the '/' endpoint
      {!session && (
      <div>
        /* Using this button, will link you to the NextAuth signIn functionality, please update your .env to include the information needed to use this, to learn more on the setup process, please view this link: https://next-auth.js.org/configuration/providers#oauth-providers
        */
        <button onClick={signIn}>Sign In</button>
        // On click of the signup button, the button will route you to the /signup endpoint
        // This is where user creation through graphQL will take place
        <Link href='/signup'>
          <button>Sign Up</button>
        </Link>
        // Below is where the editing of the page display will take place
        <h1>Welcome to your UpNext Application Home Page!</h1>
        <p>To edit this page, add to index.js in your pages directory.</p>
     </div>
    )}
    // If the session returns true, the user is logged in
    // This will the display the following html at the '/' endpoint
    {session && (
      <div>
      // The user will be informed below that they are signed in
        Signed in
        // Since the user is now signed in
        // The user has access to the checkout page which is binded to a button with the inner text of Payment
        <Link href="/checkout">
          <button>Payment</button>
        </Link>
        // If the user chooses to sign out the user has the option of signing out through NextAuth's signOut function
        <button onClick={signOut}>Sign Out</button>
      </div>
    )}
    </main>
  )
}

export default HomePage;
`;

export = indexString;
