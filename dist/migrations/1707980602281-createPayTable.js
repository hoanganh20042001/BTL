"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayTable1707980602281 = void 0;
class createPayTable1707980602281 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `pay` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`accountNumber` varchar(200) NULL,' +
            '`bankName` varchar(200) NULL,' +
            '`status` varchar(200) NULL,' +
            '`cost` INT NULL,' +
            '`date` Date NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `pay`');
    }
}
exports.createPayTable1707980602281 = createPayTable1707980602281;
//# sourceMappingURL=1707980602281-createPayTable.js.map