const signinString = `import { useLazyQuery, gql } from '@apollo/client';
import Link from 'next/link';

const GET_USER = gql\`
  query getUser($data: UserInput!) {
    getUser(data: $data) {
      id
      email
      password
    }
  }
\`;

function signInPage() {

  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);
  let email;
  let password;
  if(error) console.log("Error in Sign In Page for useLazyQuery hook");

  return (
    <div>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <h1>Sign In Page</h1>
      <form id="signin" onSubmit={e => {
        e.preventDefault();
        getUser({
          variables: {
            data: {
              email: email.value,
              password: password.value
            }
          }
        })
        email.value = '';
        password.value = '';
      }}>
        <input ref = {node => {email = node}} type='text' placeholder='E-mail'/>
        <input ref = {node => {password = node}} type='password' placeholder='Password'/>
        <input type='submit' value='Sign In'/>
      </form>
    </div>
  )
}

export default signInPage;
`;

export = signinString;
