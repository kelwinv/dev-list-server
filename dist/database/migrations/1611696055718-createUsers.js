"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers1611696055718 = void 0;
const typeorm_1 = require("typeorm");
class createUsers1611696055718 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.createUsers1611696055718 = createUsers1611696055718;
