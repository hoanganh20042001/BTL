"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUserIdInPay1708958741629 = void 0;
class insertUserIdInPay1708958741629 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `pay` ADD `userId` INT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `pay` DROP COLUMN `userId`');
    }
}
exports.insertUserIdInPay1708958741629 = insertUserIdInPay1708958741629;
//# sourceMappingURL=1708958741629-insertUserIdInPay.js.map