import {MigrationInterface, QueryRunner} from "typeorm";

export class createBrandTable1708590082081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `brand` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(200) NULL,' +
            '`description` varchar(200) NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `type`');
    }
}
