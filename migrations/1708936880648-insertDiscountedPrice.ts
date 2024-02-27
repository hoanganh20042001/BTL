import {MigrationInterface, QueryRunner} from "typeorm";

export class insertDiscountedPrice1708936880648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` ADD `discountedPrice` INT NULL')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` DROP COLUMN `discountedPrice` ')
    }

}
