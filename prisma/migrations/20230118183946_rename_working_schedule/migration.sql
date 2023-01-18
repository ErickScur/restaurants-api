/*
  Warnings:

  - You are about to drop the `WorkingSchedule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WorkingSchedule" DROP CONSTRAINT "WorkingSchedule_restaurantId_fkey";

-- DropTable
DROP TABLE "WorkingSchedule";

-- CreateTable
CREATE TABLE "WorkingDay" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "startHour" TEXT,
    "endHour" TEXT,
    "isOpened" BOOLEAN NOT NULL,
    "restaurantId" TEXT NOT NULL,

    CONSTRAINT "WorkingDay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkingDay" ADD CONSTRAINT "WorkingDay_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
