import {MigrationInterface, QueryRunner} from "typeorm";

export class createCategoryTable1708588574068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `category` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(200) NULL,' +
            '`description` varchar(200) NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `category`');
    }

}
