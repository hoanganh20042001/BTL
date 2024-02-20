"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDescriptionInCategory1708055717993 = void 0;
class updateDescriptionInCategory1708055717993 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `category` DROP COLUMN `description` VARCHAR(200) NULL');
    }
    async down(queryRunner) {
    }
}
exports.updateDescriptionInCategory1708055717993 = updateDescriptionInCategory1708055717993;
//# sourceMappingURL=1708055717993-updateDescriptionInCategory.js.map