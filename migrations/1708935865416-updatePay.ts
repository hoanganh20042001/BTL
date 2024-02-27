import {MigrationInterface, QueryRunner} from "typeorm";

export class updatePay1708935865416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `pay` ADD `discountId` INT NULL')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `pay` DROP COLUMN `discountId` ')
    }

}
