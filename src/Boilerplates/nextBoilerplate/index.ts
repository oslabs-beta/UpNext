const indexString = `import Link from 'next/link';
import React from "react";
import {signIn, signOut, useSession} from "next-auth/client";
function HomePage() {
  const [session, loading] = useSession();
  return (
    <main>
      {!session && (
      <div>
        <button onClick={signIn}>Sign In</button>
        <Link href='/signup'>
          <button>Sign Up</button>
        </Link>
        <h1>Welcome to your UpNext Application Home Page!</h1>
        <p>To edit this page, add to index.js in your pages directory.</p>
     </div>
    )}
    {session && (
      <div>
        Signed in
        <Link href="/checkout">
          <button>Payment</button>
        </Link>
        <button onClick={signOut}>Sign Out</button> 
      </div>
    )}
    </main>
  )
}
export default HomePage;
`;

export = indexString;
