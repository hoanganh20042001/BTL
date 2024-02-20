"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewsTable1707966792425 = void 0;
class createNewsTable1707966792425 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `news` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`title` varchar(255) NULL,' +
            '`newDate` Date NULL,' +
            '`view` INT default 0,' +
            '`liked` INT default 0,' +
            '`userId` INT NULL ,' +
            '`content` TEXT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `news`');
    }
}
exports.createNewsTable1707966792425 = createNewsTable1707966792425;
//# sourceMappingURL=1707966792425-createNewsTable.js.map