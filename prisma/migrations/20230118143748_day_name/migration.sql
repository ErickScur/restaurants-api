/*
  Warnings:

  - You are about to drop the column `startHout` on the `WorkingSchedule` table. All the data in the column will be lost.
  - Added the required column `day` to the `WorkingSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkingSchedule" DROP COLUMN "startHout",
ADD COLUMN     "day" TEXT NOT NULL,
ADD COLUMN     "startHour" TEXT;
