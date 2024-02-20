"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTypeInProduct1708055017645 = void 0;
class addTypeInProduct1708055017645 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` ADD `type` VARCHAR(200) NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `type`');
    }
}
exports.addTypeInProduct1708055017645 = addTypeInProduct1708055017645;
//# sourceMappingURL=1708055017645-addTypeInProduct.js.map