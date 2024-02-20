import {MigrationInterface, QueryRunner} from "typeorm";

export class addTypeInProduct1708055017645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` ADD `type` VARCHAR(200) NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `type`');
    }

}
