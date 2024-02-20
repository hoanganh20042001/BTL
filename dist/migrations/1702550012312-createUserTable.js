"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserTable1702550012312 = void 0;
class createUserTable1702550012312 {
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `user` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`identity` varchar(200) NULL,' +
            '`userName` varchar(200) NULL,' +
            '`roleId` int NULL,' +
            '`passWord` varchar(200) NULL,' +
            '`fullName` varchar(200) NULL,' +
            '`phoneNumber` varchar(200) NULL,' +
            '`email` varchar(200) NULL,' +
            '`addressId` int NULL,' +
            '`isActive` int NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `user`');
    }
}
exports.createUserTable1702550012312 = createUserTable1702550012312;
//# sourceMappingURL=1702550012312-createUserTable.js.map