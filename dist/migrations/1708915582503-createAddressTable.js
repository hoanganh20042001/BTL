"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddressTable1708915582503 = void 0;
class createAddressTable1708915582503 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `address` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(255) NULL,' +
            '`note` varchar(200) NULL,' +
            '`userId` INT NOT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `Role`');
    }
}
exports.createAddressTable1708915582503 = createAddressTable1708915582503;
//# sourceMappingURL=1708915582503-createAddressTable.js.map