const contextString = `import { PrismaClient } from '@prisma/client';
//Inititates your Prisma Client to give access to prisma
//methods for your graphql queries
const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient
}

export const context: Context = {
  prisma: prisma
}
`;

export = contextString;
