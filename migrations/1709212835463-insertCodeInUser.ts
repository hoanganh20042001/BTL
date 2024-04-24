import {MigrationInterface, QueryRunner} from "typeorm";

export class insertCodeInUser1709212835463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `user` ADD  `code` VARCHAR(200) NULL');
        await queryRunner.query('ALTER TABLE `user` ADD  `forgetPassCode` VARCHAR(200) NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN  `code`');
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN  `forgetPassCode` ');
    }

}
