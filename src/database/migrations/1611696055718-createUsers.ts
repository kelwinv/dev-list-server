import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1611696055718 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "login",
            type: "varchar",
          },
          {
            name: "avatar_url",
            type: "varchar",
          },
          {
            name: "bio",
            type: "varchar",
          },
          {
            name: "public_repos",
            type: "int",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
