import {MigrationInterface, QueryRunner} from "typeorm";

export class createAddressTable1708915582503 implements MigrationInterface {

   
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `address` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(255) NULL,' +
            '`note` varchar(200) NULL,' +
            '`userId` INT NOT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `Role`');
    }
}
