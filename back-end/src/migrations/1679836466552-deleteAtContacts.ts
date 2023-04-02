import { MigrationInterface, QueryRunner } from "typeorm";

export class deleteAtContacts1679836466552 implements MigrationInterface {
    name = 'deleteAtContacts1679836466552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "deletedAt"`);
    }

}
