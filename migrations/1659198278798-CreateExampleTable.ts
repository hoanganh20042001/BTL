import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAccountTable1659198278798 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `example` ( ' +
      '`id` int NOT NULL AUTO_INCREMENT, ' +
      '`name` varchar(255) NULL,' +
      '`description` varchar(255) NULL,' +
      '`createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
      '`updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
      ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `example`');
  }

}
