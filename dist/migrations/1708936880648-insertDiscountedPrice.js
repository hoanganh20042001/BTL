"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDiscountedPrice1708936880648 = void 0;
class insertDiscountedPrice1708936880648 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` ADD `discountedPrice` INT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `discountedPrice` ');
    }
}
exports.insertDiscountedPrice1708936880648 = insertDiscountedPrice1708936880648;
//# sourceMappingURL=1708936880648-insertDiscountedPrice.js.map