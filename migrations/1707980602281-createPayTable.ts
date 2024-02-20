import {MigrationInterface, QueryRunner} from "typeorm";

export class createPayTable1707980602281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `pay` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`accountNumber` varchar(200) NULL,' +
            '`bankName` varchar(200) NULL,' +
            '`status` varchar(200) NULL,' +
            '`cost` INT NULL,' +
            '`date` Date NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `pay`');
    }

}
