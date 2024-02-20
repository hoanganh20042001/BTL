"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserTokenTable1702550175241 = void 0;
class createUserTokenTable1702550175241 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `userToken` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`token` TEXT NULL,' +
            '`expired` varchar(500) NULL,' +
            '`userId` int NULL, ' +
            '`deviceInfo` varchar(200) NULL,' +
            '`isActive` int NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `UserToken`');
    }
}
exports.createUserTokenTable1702550175241 = createUserTokenTable1702550175241;
//# sourceMappingURL=1702550175241-createUserTokenTable.js.map