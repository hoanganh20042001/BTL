import {MigrationInterface, QueryRunner} from "typeorm";

export class insertProduct1708587955973 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `isActive`');
        await queryRunner.query('ALTER TABLE `product` ADD `status` VARCHAR(200) NULL');
        await queryRunner.query('ALTER TABLE `product` ADD `quantity` INT NULL');
        await queryRunner.query('ALTER TABLE `product` ADD `typeId` INT NULL');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `type`');
        await queryRunner.query('ALTER TABLE `product` ADD `brand` INT NULL');
        


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` ADD `isActive`INT NULL');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `status` ');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `quantity` ');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `typeId` ');
        await queryRunner.query('ALTER TABLE `product` ADD `type` VARCHAR(200) NULL');
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `brand`');
       

    }


}
