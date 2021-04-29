"use strict";
const signupString = `import { useMutation, gql } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CREATE_USER = gql\`
  mutation createUser($data: UserInput!) {
    createUser(data: $data) {
      id
      email
      password
    }
  }
\`;

function SignupPage() {
  const router = useRouter()
  
  const[createUser] = useMutation(CREATE_USER);
  let email;
  let password;

  return (
  <div>
    <Link href='/'>
    <button>Home</button>
    </Link>
    <h1>Sign-Up Page</h1>
    <form id="signup" onSubmit={e => {
      e.preventDefault();
      createUser({
        variables: { data: {
          email: email.value,
          password: password.value
          }}
      })
      email.value = '';
      password.value = '';
      router.push('/');
    }}>
      <input ref = {node => {email = node}} type='text' placeholder='E-mail'/>
      <input ref = {node => {password = node}} type='password' placeholder='Password'/>
      <input type='submit' placeholder='Submit'/>
    </form>
  </div>
  );
}

export default SignupPage;
`;
module.exports = signupString;
//# sourceMappingURL=signup.js.map