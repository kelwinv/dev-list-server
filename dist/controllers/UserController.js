"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const axios_1 = __importDefault(require("axios"));
const Users_1 = require("../models/Users");
exports.default = {
    async index(req, res) {
        const userdb = typeorm_1.getRepository(Users_1.Users);
        const users = await userdb.find();
        return res.json(users);
    },
    async create(req, res) {
        const { url } = req.body;
        const userGithub = await axios_1.default.get(url);
        const reposGithub = await axios_1.default.get(`${url}/repos`);
        const { id, login, avatar_url, bio, public_repos } = userGithub.data;
        const repositories = reposGithub.data.map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "",
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            language: repo.language || "",
        }));
        const Userdata = {
            id,
            login,
            avatar_url,
            bio: bio || "",
            public_repos,
            repos: repositories,
        };
        const userdb = typeorm_1.getRepository(Users_1.Users);
        const user = userdb.create(Userdata);
        await userdb.save(user);
        return res.json(user);
    },
    async show(req, res) {
        const { id } = req.params;
        const userdb = typeorm_1.getRepository(Users_1.Users);
        const user = await userdb.findOne({
            where: [{ id }],
            relations: ['repos']
        });
        return res.json(user);
    },
};
