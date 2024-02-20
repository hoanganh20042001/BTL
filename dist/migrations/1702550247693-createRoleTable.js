"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoleTable1702550247693 = void 0;
class createRoleTable1702550247693 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `role` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(200) NULL,' +
            '`isActive` int NULL,' +
            '`description` varchar(200) NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `Role`');
    }
}
exports.createRoleTable1702550247693 = createRoleTable1702550247693;
//# sourceMappingURL=1702550247693-createRoleTable.js.map