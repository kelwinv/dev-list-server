import { Entity, PrimaryColumn, Column, OneToMany, JoinColumn } from "typeorm";
import Repos from "./Repos";

@Entity('users')
export default class Users {
  @PrimaryColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  avatar_url: string;

  @Column()
  bio: string;

  @Column()
  public_repos: number;

  @OneToMany(() => Repos,repos => repos.Users,{
    cascade: ['insert','update']
  })
  @JoinColumn({ name: 'user_id'})
  repos: Repos[];
}
