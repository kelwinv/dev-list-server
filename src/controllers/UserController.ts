import { Request, Response } from "express";
import { getRepository } from "typeorm";

import axios from "axios";

import { Users } from "../models/Users";

interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
}

interface IRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
}

export default {
  async index(req: Request, res: Response) {
    const userdb = getRepository(Users);

    const users = await userdb.find();

    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const { url } = req.body;
    const userGithub = await axios.get<IUser>(url);
    const reposGithub = await axios.get<IRepo[]>(`${url}/repos`);

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

    const userdb = getRepository(Users);

    const user = userdb.create(Userdata);

    await userdb.save(user);

    return res.json(user);
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const userdb = getRepository(Users);

    const user = await userdb.findOne({
      where: [{ id }],
      relations: ['repos']
    });

    return res.json(user);
  },
};
