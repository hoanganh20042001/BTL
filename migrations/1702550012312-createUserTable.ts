import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserTable1702550012312 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `user` ( ' +
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
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `user`');
    }

}
