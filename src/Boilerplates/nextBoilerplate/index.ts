const indexString = `import Link from 'next/link';

function HomePage() {

  return (
    <div>
      <Link href='/login'>
        <button>Log In</button>
      </Link>
      <Link href='/signup'>
        <button>Sign-Up</button>
      </Link>
      <h1>Welcome to your UpNext Application Home Page!</h1>
      <p>To edit this page, add to index.js in your pages directory.</p>
    </div>
  )
}

export default HomePage;
`;

export = indexString;
