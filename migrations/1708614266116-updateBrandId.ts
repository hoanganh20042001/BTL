import {MigrationInterface, QueryRunner} from "typeorm";

export class updateBrandId1708614266116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `brand`');
        await queryRunner.query('ALTER TABLE `product` ADD `brandId` INT NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` ADD `brand` INT NULL');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `brandId` ');
    }

}
