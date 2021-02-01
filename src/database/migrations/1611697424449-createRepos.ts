import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createRepos1611697424449 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "repos",
        columns: [
          {
            name: "id",
            type: "int",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "html_url",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "language",
            type: "varchar",
          },
          {
            name: "stargazers_count",
            type: "int",
          },
          {
            name: "user_id",
            type: "int",
          },
        ],
        foreignKeys: [
          {
            name: "userRepo",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("repos");
  }
}
