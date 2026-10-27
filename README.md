### To use prisma do these steps

1. npm install prisma
2. npx prisma init   
3. npx prisma migrate dev --name init
4. npx prisma generate
5. npm install @prisma/adapter-pg pg
6. npm install --save-dev @types/pg
7. add this in router file
const prismaClient = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
});