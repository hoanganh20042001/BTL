"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertProduct1708587955973 = void 0;
class insertProduct1708587955973 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `isActive`');
        await queryRunner.query('ALTER TABLE `product` ADD `status` VARCHAR(200) NULL');
        await queryRunner.query('ALTER TABLE `product` ADD `quantity` INT NULL');
        await queryRunner.query('ALTER TABLE `product` ADD `typeId` INT NULL');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `type`');
        await queryRunner.query('ALTER TABLE `product` ADD `brand` INT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` ADD `isActive`INT NULL');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `status` ');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `quantity` ');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `typeId` ');
        await queryRunner.query('ALTER TABLE `product` ADD `type` VARCHAR(200) NULL');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `brand`');
    }
}
exports.insertProduct1708587955973 = insertProduct1708587955973;
//# sourceMappingURL=1708587955973-insertProduct.js.map