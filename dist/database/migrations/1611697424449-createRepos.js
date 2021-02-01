"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRepos1611697424449 = void 0;
const typeorm_1 = require("typeorm");
class createRepos1611697424449 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("repos");
    }
}
exports.createRepos1611697424449 = createRepos1611697424449;
