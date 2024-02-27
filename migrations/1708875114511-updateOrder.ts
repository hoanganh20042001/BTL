import { MigrationInterface, QueryRunner } from "typeorm";

export class updateOrder1708875114511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `order` ADD `status` INT NULL')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `porder` DROP COLUMN `status`')
    }

}
