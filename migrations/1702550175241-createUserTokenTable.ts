import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserTokenTable1702550175241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `userToken` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`token` TEXT NULL,' +
            '`expired` varchar(500) NULL,' +
            '`userId` int NULL, ' +
            '`deviceInfo` varchar(200) NULL,' +
            '`isActive` int NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `UserToken`');
    }

}
