/*
  Warnings:

  - You are about to drop the column `completedAT` on the `todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "todo" DROP COLUMN "completedAT",
ADD COLUMN     "completedAt" TIMESTAMP;
