const nextauthString = `import NextAuth from "next-auth";
import Providers from "next-auth/providers";

// Creates options for serverless authentication
const options = {
  // Each provider will establish OAuth capabilities with the specified API
  // Make sure to change the environment variables in .env to have proper functionality
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  // Database info
  database: {
    type: "sqlite",
    database: "../prisma/dev.db",
    synchronize: true,
  }
};

export default (req, res) => NextAuth(req, res, options);
`;

export = nextauthString;
