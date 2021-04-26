const prismaString = `// This is your Prisma schema file

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
}
`;

export = prismaString;