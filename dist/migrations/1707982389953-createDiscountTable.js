"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiscountTable1707982389953 = void 0;
class createDiscountTable1707982389953 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `discount` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(200) NULL,' +
            '`value` INT NULL,' +
            '`isActive` int NULL,' +
            '`description` varchar(200) NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `discount`');
    }
}
exports.createDiscountTable1707982389953 = createDiscountTable1707982389953;
//# sourceMappingURL=1707982389953-createDiscountTable.js.map