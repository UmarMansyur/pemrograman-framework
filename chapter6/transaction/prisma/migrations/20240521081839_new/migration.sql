/*
  Warnings:

  - Added the required column `stock` to the `TransactionProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TransactionProduct` ADD COLUMN `stock` INTEGER NOT NULL;
