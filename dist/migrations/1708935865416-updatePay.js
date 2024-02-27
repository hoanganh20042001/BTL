"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePay1708935865416 = void 0;
class updatePay1708935865416 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `pay` ADD `discountId` INT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `pay` DROP COLUMN `discountId` ');
    }
}
exports.updatePay1708935865416 = updatePay1708935865416;
//# sourceMappingURL=1708935865416-updatePay.js.map