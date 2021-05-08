const nextauthString = `import NextAuth from "next-auth";
import Providers from "next-auth/providers";
const options = {
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
        host: "",
        port: "",
        auth: {
          user: "",
          pass: "",
        } 
      },
      from: process.env.EMAIL_FROM,
    }),
  ]
};
export default (req, res) => NextAuth(req, res, options);
`;

export = nextauthString;