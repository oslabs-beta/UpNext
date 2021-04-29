const pkgjsonString = `{
  "name": "upnextapp",
  "version": "1.0.0",
  "description": "insert description here!",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "startdev": "tsnd --respawn server/apolloServer"
  },
  "author": "yourName",
  "license": "ISC"
}
`;

export = pkgjsonString;
