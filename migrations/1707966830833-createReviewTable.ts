import {MigrationInterface, QueryRunner} from "typeorm";

export class createCommentTable1707966830833 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `review` ( ' +
            '`id` int NOT NULL AUTO_INCREMENT, ' +
            '`content` varchar(200) NULL,' +
            '`conDate` Date NULL,' +
            '`value` INT NULL,' +
            '`productId` INT NULL,' +
            '`userId` INT NULL,' +
            '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
            ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `review`');
    }
    

}
