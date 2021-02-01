import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import Users from "./Users";

@Entity('repos')
export default class Repos {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  html_url: string;

  @Column()
  description: string;

  @Column() 
  language: string;

  @Column()
  stargazers_count: number;

  @ManyToOne(() => Users, user => user.repos)
  @JoinColumn({name: 'user_id'})
  Users: Users;
}
