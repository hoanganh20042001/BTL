"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderTable1707981861621 = void 0;
class createOrderTable1707981861621 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `order` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`productId` INT NULL,' +
            '`userId` INT NULL,' +
            '`quantity` INT NULL,' +
            '`payId` INT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `order`');
    }
}
exports.createOrderTable1707981861621 = createOrderTable1707981861621;
//# sourceMappingURL=1707981861621-createOrderTable.js.map