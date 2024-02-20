"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCartTable1707980423442 = void 0;
class createCartTable1707980423442 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `cart` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`productId` INT NULL,' +
            '`userId` INT NULL,' +
            '`quantity` INT NULL,' +
            '`date` Date NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `cart`');
    }
}
exports.createCartTable1707980423442 = createCartTable1707980423442;
//# sourceMappingURL=1707980423442-createCartTable.js.map