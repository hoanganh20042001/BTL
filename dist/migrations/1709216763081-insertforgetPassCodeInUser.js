"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertforgetPassCodeInUser1709216763081 = void 0;
class insertforgetPassCodeInUser1709216763081 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `user` ADD  `forgetPassCode` VARCHAR(200) NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `user` ADD  `forgetPassCode` VARCHAR(200) NULL');
    }
}
exports.insertforgetPassCodeInUser1709216763081 = insertforgetPassCodeInUser1709216763081;
//# sourceMappingURL=1709216763081-insertforgetPassCodeInUser.js.map