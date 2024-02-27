import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProduct1708612065472 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` ADD `sold` INT NULL');
        await queryRunner.query('ALTER TABLE `product` ADD `date` Date NULL');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `sold`');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `date`');

    }

}
