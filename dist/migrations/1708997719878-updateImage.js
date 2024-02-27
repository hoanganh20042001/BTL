"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImage1708997719878 = void 0;
class updateImage1708997719878 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` MODIFY COLUMN  `image` TEXT NULL');
        await queryRunner.query('ALTER TABLE `news` ADD  `image` TEXT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `product` MODIFY COLUMN  `image` TEXT NULL');
        await queryRunner.query('ALTER TABLE `news` DROP COLUMN  `image`');
    }
}
exports.updateImage1708997719878 = updateImage1708997719878;
//# sourceMappingURL=1708997719878-updateImage.js.map