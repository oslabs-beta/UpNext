const signupString = `import { useMutation, gql } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Creates a local version of the createUser mutation
const CREATE_USER = gql\`
  mutation createUser($data: UserInput!) {
    createUser(data: $data) {
      id
      email
      password
    }
  }
\`;

// Sign up page functional component
function SignupPage() {
  // Establishes router using the useRouter hook to allow native NextRouter capabilities
  const router = useRouter();
  // Creates the createUser tuple using the useMutation hook passing in the CREATE_USER mutation
  const [ createUser ] = useMutation(CREATE_USER);
  // initializes the email and password variables for later use
  let email;
  let password;

  return (
  <div>
    {/* Utilizing Next Link to create a home button that redirects to the home page on click (next/link) */}
    <Link href='/'>
    <button>Home</button>
    </Link>
    <h1>Sign-Up Page</h1>
    {/* Sign up form, which on submit wil create a user using the createUser tuple mutation */}
    <form id="signup" onSubmit={e => {
      e.preventDefault();
      createUser({
        variables: {
          data: {
            email: email.value,
            password: password.value
          }
        }
      })
      email.value = '';
      password.value = '';
      // Uses NextRouter to redirect to home page after user creation
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

export = signupString;
