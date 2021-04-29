const prismaString = `// This is your Prisma schema file

datasource db {
  provider = "postgresql"
  url      = env("postgres://gcuwvnue:AD5M6ClavcQ-Mo1QiM8saR_5gOOAulkT@kashin.db.elephantsql.com:5432/gcuwvnue")
}

generator client {
  provider = "prisma-client-js"
}

model User {
    id       Int    @id @default(autoincrement())
    name     String
    password String
}
`;

export = prismaString;