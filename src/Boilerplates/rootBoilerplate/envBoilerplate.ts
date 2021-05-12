const envString = `# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#using-environment-variables

# Prisma supports the native connection string format for PostgreSQL, MySQL and SQLite.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"
NEXTAUTH_URL=http://localhost:3000

GITHUB_ID="put your github id here"
GITHUB_SECRET="put your github secret here"

TWITTER_ID="put your twitter id here"
TWITTER_SECRET="put your twitter secret here"

FACEBOOK_ID="put your facebook id here"
FACEBOOK_SECRET="put your facebook secret here"

GOOGLE_ID="put your google id here"
GOOGLE_SECRET="put your google secret here"

AUTH0_CLIENT_ID="put your auth0 client id here"
AUTH0_CLIENT_SECRET="put your auth0 client secret here"
AUTH0_DOMAIN="put your auth0 domain here"

EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_FROM=

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
`;

export = envString;
