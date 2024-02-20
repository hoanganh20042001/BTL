"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryTable1707967579803 = void 0;
class createCategoryTable1707967579803 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `category` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(200) NULL,' +
            '`description` varchar(200) NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `category`');
    }
}
exports.createCategoryTable1707967579803 = createCategoryTable1707967579803;
//# sourceMappingURL=1707967579803-createCategoryTable.js.map