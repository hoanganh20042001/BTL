import {MigrationInterface, QueryRunner} from "typeorm";

export class insertUserIdInPay1708958741629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `pay` ADD `userId` INT NULL')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `pay` DROP COLUMN `userId`')
    }

}
