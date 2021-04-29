"use strict";
const prismaString = `// This is your Prisma schema file

datasource db {
  provider = "sqlite"
  url = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
    id       Int    @id @default(autoincrement())
    email    String @unique
    password String
}
`;
module.exports = prismaString;
//# sourceMappingURL=prismaBoilerplate.js.map