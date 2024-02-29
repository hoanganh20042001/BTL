"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertCodeInUser1709212835463 = void 0;
class insertCodeInUser1709212835463 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `user` ADD  `code` VARCHAR(200) NULL');
        await queryRunner.query('ALTER TABLE `user` ADD  `forgetPassCode` VARCHAR(200) NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN  `code`');
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN  `forgetPassCode` ');
    }
}
exports.insertCodeInUser1709212835463 = insertCodeInUser1709212835463;
//# sourceMappingURL=1709212835463-insertCodeInUser.js.map