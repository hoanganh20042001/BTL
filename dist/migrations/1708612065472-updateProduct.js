"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct1708612065472 = void 0;
class updateProduct1708612065472 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` ADD `sold` INT NULL');
        await queryRunner.query('ALTER TABLE `product` ADD `date` Date NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `sold`');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `date`');
    }
}
exports.updateProduct1708612065472 = updateProduct1708612065472;
//# sourceMappingURL=1708612065472-updateProduct.js.map