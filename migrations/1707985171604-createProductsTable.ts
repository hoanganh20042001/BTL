import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductsTable1707985171604 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `product` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`name` varchar(200) NULL,' +
            '`image` varchar(200) NULL,' +
            '`discount` INT NULL,' +
            '`price` INT NULL,' +
            '`categoryId` varchar(200) NULL,' +
            '`isActive` int NULL,' +
            '`description` TEXT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `product`');
    }

}
