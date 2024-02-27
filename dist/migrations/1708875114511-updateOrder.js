"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrder1708875114511 = void 0;
class updateOrder1708875114511 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `order` ADD `status` INT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `porder` DROP COLUMN `status`');
    }
}
exports.updateOrder1708875114511 = updateOrder1708875114511;
//# sourceMappingURL=1708875114511-updateOrder.js.map