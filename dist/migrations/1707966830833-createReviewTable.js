"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommentTable1707966830833 = void 0;
class createCommentTable1707966830833 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `review` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`content` varchar(200) NULL,' +
            '`conDate` Date NULL,' +
            '`value` INT NULL,' +
            '`productId` INT NULL,' +
            '`userId` INT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `review`');
    }
}
exports.createCommentTable1707966830833 = createCommentTable1707966830833;
//# sourceMappingURL=1707966830833-createReviewTable.js.map