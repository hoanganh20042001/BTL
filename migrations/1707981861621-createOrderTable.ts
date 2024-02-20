import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrderTable1707981861621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `order` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`productId` INT NULL,' +
            '`userId` INT NULL,' +
            '`quantity` INT NULL,' +
            '`payId` INT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `order`');
    }

}
