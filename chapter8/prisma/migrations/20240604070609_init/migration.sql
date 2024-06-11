/*
  Warnings:

  - You are about to alter the column `role` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `thumbnail` VARCHAR(191) NULL,
    MODIFY `role` ENUM('dkr', 'mhs', 'admin') NOT NULL DEFAULT 'mhs';
