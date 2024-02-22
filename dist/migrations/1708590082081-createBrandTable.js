"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBrandTable1708590082081 = void 0;
class createBrandTable1708590082081 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `brand` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(200) NULL,' +
            '`description` varchar(200) NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `type`');
    }
}
exports.createBrandTable1708590082081 = createBrandTable1708590082081;
//# sourceMappingURL=1708590082081-createBrandTable.js.map