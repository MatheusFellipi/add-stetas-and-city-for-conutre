import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { State } from "./state.entity";

@Entity("cities")
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => State, (state) => state.cities)
  @JoinColumn({ name: "state_id", referencedColumnName: "id" })
  state: State;

  @Column("varchar")
  name: string;
}
