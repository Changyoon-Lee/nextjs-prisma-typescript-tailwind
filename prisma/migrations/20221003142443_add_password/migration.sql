/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" INTEGER,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL
);
INSERT INTO "new_User" ("avatar", "created", "email", "id", "name", "phone", "updated") SELECT "avatar", "created", "email", "id", "name", "phone", "updated" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
