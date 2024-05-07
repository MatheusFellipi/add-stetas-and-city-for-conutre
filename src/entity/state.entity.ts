import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { City } from "./city.entity";

@Entity("states")
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  acronyms: string;

  @Column("varchar")
  name: string;

  @OneToMany(() => City, (city) => city.state, { cascade: true })
  cities: City[];
}
