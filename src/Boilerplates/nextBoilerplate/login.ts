const loginString = `import { useLazyQuery, gql } from '@apollo/client';
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

function LoginPage() {

  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);
  let email;
  let password;
  if(error) console.log("Error in Login Page for useLazyQuery hook");

  return (
    <div>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <h1>Login Page</h1>
      <form id="login" onSubmit={e => {
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
        <input type='submit' value='Log In'/>
      </form>
    </div>
  )
}

export default LoginPage;
`;

export = loginString;
