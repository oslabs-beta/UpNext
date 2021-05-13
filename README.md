<p align="center">
<a href="https://i.imgur.com/q5WS2Ko.png"><img src="https://i.imgur.com/q5WS2Ko.png" width="750" height="350"/></a>
</p>

# About

A comprehensive, open-source [Visual Studio Code](https://code.visualstudio.com/) extension for creating boilerplate for a fullstack [SaaS application](https://searchcloudcomputing.techtarget.com/definition/Software-as-a-Service) with one simple command. [UpNext](https://upnextjs.org/) delivers all of the features needed to jumpstart your application including end to end CRUD functionality, authentication, payments/billing and more.

⚠️ Disclaimer: This is beta software, which means there may still be bugs. Please [report any bugs and share your feedback](https://github.com/oslabs-beta/UpNext/issues).

UpNext is currently only compatible with [npm](https://www.npmjs.com/) for package management.

# Installation

1. Install [Visual Studio Code](https://code.visualstudio.com/download)

2. Launch Visual Studio Code

3. Install our UpNext extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=UpNext.upnext)

# Configuration

- Initiate a git repository including your `README`, `.gitignore`, and `LICENSE` as we do not provide these files. Then, open your repository with Visual Studio Code.

- Launch the command palette by using `Ctrl-Shift-P` (Windows, Linux) or `Cmd-Shift-P` (Mac/OSX)

- Type in and select `Create Boilerplate` from the drop down menu

<p align="center">
<a href="https://media.giphy.com/media/WQp504jwshz2d6u24S/giphy.gif"><img src="https://media.giphy.com/media/WQp504jwshz2d6u24S/giphy.gif" width="500" height ="300"/></a>
</p>

- `Create Boilerplate` should create a new UpNext terminal in your VS Code and start installing all of your dependencies. Wait until installation has concluded before continuing.

- Now that you have all of your dependencies, run the `npm test` script to ensure that all of your files/directories have been successfully created. If you are missing files, run the `Create Boilerplate` command again and re-run your test script until you pass all tests.

<p align="center">
<a href="https://i.imgur.com/BMCbrfu.png"><img src="https://i.imgur.com/BMCbrfu.png" width="500" height="600"/></a>
</p>

- After all of your files/directories have been successfully created, head over to your `.env` file located in the root directory. It should look a little something like this:

<p align="center">
<a href="https://i.imgur.com/vT8kJlv.png"><img src="https://i.imgur.com/vT8kJlv.png" width="750"/></a>
</p>

- Your `.env` file houses all of the sensitive information for your [OAuth](https://next-auth.js.org/getting-started/introduction) and [Stripe Payments](https://stripe.com/docs/keys). Be sure to replace our placeholder strings with your ids and secrets (do not include quotes) before attempting to test the authentication and payments page. Be sure to include your `.env` in your `.gitignore` for security purposes.

- Once you have your ids and secrets properly assigned, test our boilerplate by starting Next in development mode using `npm run dev` and in a different terminal use `npm run startdev` to start the server.

- Congratulations, you've finished configuring your UpNext boilerplate. Now focus on your business logic. If you've enjoyed your experience, star us on [Github](https://github.com/oslabs-beta/UpNext) and clap our [Medium](https://jason-d-lee.medium.com/jumpstart-your-next-saas-application-with-upnext-c7eaf8bb7d7f) article.

# Features

A modern and robust tech stack for all types of applications including:

- [Javascript](https://www.javascript.com/) and [Typescript](https://www.typescriptlang.org/)

- [React](https://reactjs.org/) with [Next.js](https://nextjs.org/) framework

  - Quick and easy routing capabilities using Next [Router](https://nextjs.org/docs/api-reference/next/router)/[Link](https://nextjs.org/docs/api-reference/next/link)
  - Serverless authentication and OAuth using [Next Auth](https://next-auth.js.org/)

- [Apollo](https://www.apollographql.com/) [Client](https://www.apollographql.com/docs/react/) and [Server](https://www.apollographql.com/docs/apollo-server/)

- [Express](https://expressjs.com/) Server

- [GraphQL](https://graphql.org/) utilizing a [Prisma](https://www.prisma.io/) ORM

- [Stripe](https://stripe.com/) [API](https://stripe.com/docs/api)

# Release Notes

UpNext current version: 1.0.0

## 1.0.0

Initial release of UpNext

# Contributors

- Andrew Kim: [Github](https://github.com/andrewkimq) [LinkedIn](https://www.linkedin.com/in/andrewkimq/)
- Hyesung Peter Lee: [Github](https://github.com/peterhyesung) [LinkedIn](https://www.linkedin.com/in/peterhyesung/)
- Jason Lee: [Github](https://github.com/jason-d-lee) [LinkedIn](https://www.linkedin.com/in/jason-dongyul-lee)
- Jorge Carlos 'JC' Fernandez: [Github](https://github.com/jorgecarlosfernandez) [LinkedIn](https://www.linkedin.com/in/jorge-carlos-fernandez/)
- Kai Evans: [Github](https://github.com/kaijosefevans) [LinkedIn](https://www.linkedin.com/in/kaijosefevans/)
