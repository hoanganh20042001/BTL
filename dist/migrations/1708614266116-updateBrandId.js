"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBrandId1708614266116 = void 0;
class updateBrandId1708614266116 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `brand`');
        await queryRunner.query('ALTER TABLE `product` ADD `brandId` INT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` ADD `brand` INT NULL');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `brandId` ');
    }
}
exports.updateBrandId1708614266116 = updateBrandId1708614266116;
//# sourceMappingURL=1708614266116-updateBrandId.js.map