const prismaString = `// This is your Prisma schema file
//Intiates sqlite as your starter database. If you would like to change databases,
//change your provider to the database of your choice and input your database uri
//in place of DATABASE_URL
datasource db {
  provider = "sqlite"
  url = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
//Defines your prisma schema. We have created an example of a simple User
//with an email and password for you.
model User {
    id       Int    @id @default(autoincrement())
    email    String @unique
    password String
}
`;

export = prismaString;