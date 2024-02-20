"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductsTable1707985171604 = void 0;
class createProductsTable1707985171604 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `product` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(200) NULL,' +
            '`image` varchar(200) NULL,' +
            '`discount` INT NULL,' +
            '`price` INT NULL,' +
            '`categoryId` varchar(200) NULL,' +
            '`isActive` int NULL,' +
            '`description` TEXT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `product`');
    }
}
exports.createProductsTable1707985171604 = createProductsTable1707985171604;
//# sourceMappingURL=1707985171604-createProductsTable.js.map