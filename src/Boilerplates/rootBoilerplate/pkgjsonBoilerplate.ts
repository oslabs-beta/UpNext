const pkgjsonString = `{
  "name": "upnextapp",
  "version": "1.0.0",
  "description": "insert description here!",
  "main": "index.js",
  "scripts": {
    "test": "mocha",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "startdev": "tsnd --respawn server/server"
  },
  "author": "yourName",
  "license": "ISC"
}
`;

export = pkgjsonString;
