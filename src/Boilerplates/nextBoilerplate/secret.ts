const secretString = `
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';

export default function Secret(){
    const[session, loading] = useSession();
    // const[content, setContent] = useState();

    // useEffect(() => {
        //   const fetchData = async() => {
        //     console.log('hello')
        //     const res = await fetch('/api/secret');
        //     console.log(res)
        //     const json = await res.json();
        //     if(json.content){
        //       setContent(json.content)
        //     }
        //   }
        //   fetchData();
        // }, [session]);

    while (typeof window !== "undefined" && loading) {
        return null
      }

      if(!session){
        <div>
          <h1>Sign in please</h1>
        </div>
      }
      return(
        <div>
          <h1>Secret Page</h1>
          <p>{content}</p>
        </div>
      )
    }`;

    export = secretString;