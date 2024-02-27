"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLikeTable1708914524119 = void 0;
class createLikeTable1708914524119 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `like` ( ' +
            '`newsId` INT NOT NULL,' +
            '`userId` INT NOT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`newsId`,`userId`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `like`');
    }
}
exports.createLikeTable1708914524119 = createLikeTable1708914524119;
//# sourceMappingURL=1708914524119-createLikeTable.js.map