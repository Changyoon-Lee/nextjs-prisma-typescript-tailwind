import { PrismaClient } from "@prisma/client";

declare global {
  var db: PrismaClient | undefined;
}

const db = new PrismaClient();

if (process.env.NODE_ENV === "development") global.db = db;
// 초기에 global db없으면 client생성 
export default db;
