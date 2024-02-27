import {MigrationInterface, QueryRunner} from "typeorm";

export class updateImage1708997719878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` MODIFY COLUMN  `image` TEXT NULL');
        await queryRunner.query('ALTER TABLE `news` ADD  `image` TEXT NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `product` MODIFY COLUMN  `image` TEXT NULL');
        await queryRunner.query('ALTER TABLE `news` DROP COLUMN  `image`');
    }

}
