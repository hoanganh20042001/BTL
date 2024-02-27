import { MigrationInterface, QueryRunner } from "typeorm";

export class createLikeTable1708914524119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `like` ( ' +
            '`newsId` INT NOT NULL,' +
            '`userId` INT NOT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`newsId`,`userId`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `like`');
    }

}
