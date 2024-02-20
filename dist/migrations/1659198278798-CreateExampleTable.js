"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountTable1659198278798 = void 0;
class CreateAccountTable1659198278798 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `example` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(255) NULL,' +
            '`description` varchar(255) NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `example`');
    }
}
exports.CreateAccountTable1659198278798 = CreateAccountTable1659198278798;
//# sourceMappingURL=1659198278798-CreateExampleTable.js.map