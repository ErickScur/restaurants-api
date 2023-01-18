-- DropForeignKey
ALTER TABLE "WorkingSchedule" DROP CONSTRAINT "WorkingSchedule_restaurantId_fkey";

-- AddForeignKey
ALTER TABLE "WorkingSchedule" ADD CONSTRAINT "WorkingSchedule_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
