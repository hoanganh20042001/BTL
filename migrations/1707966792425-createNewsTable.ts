import {MigrationInterface, QueryRunner} from "typeorm";

export class createNewsTable1707966792425 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `news` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`title` varchar(255) NULL,' +
            '`newDate` Date NULL,' +
            '`view` INT default 0,' +
            '`liked` INT default 0,' +
            '`userId` INT NULL ,' +
            '`content` TEXT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `news`');
    }

}
