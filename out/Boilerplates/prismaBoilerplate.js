"use strict";
const prismaString = `// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
    id       Int    @id @default(autoincrement())
    name     String
    password String
    Post     Post[]
    Like     Like[]
  }
`;
module.exports = prismaString;
//# sourceMappingURL=prismaBoilerplate.js.map