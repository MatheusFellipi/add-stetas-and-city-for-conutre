import { DataSource } from "typeorm"
import { City } from "./entity/city.entity"
import { State } from "./entity/state.entity"

const states_datas = require("../estados-cidades.json")

export const dbConnection = new DataSource({
  type: "[postgres, mysql..]",
  host: "localhost",
  port: 5432,
  username: "[user]",
  password: "[password]",
  database: "[database]",
  "synchronize": true,
  "logging": false,
  entities: [City, State],
});

dbConnection.initialize().then(() => {
  console.log("Data Source has been initialized!")
  saveEstadosAndCidades()
}).catch((err) => {
  console.error("Error during Data Source initialization:", err)
})

const saveEstadosAndCidades = async () => {
  const connection = dbConnection.manager;
  try {
    await connection.transaction(async (manager) => {
      for (const state of states_datas.estados) {
          const state_entity = new State();
          state_entity.acronyms = state.sigla; // change the attribute to your case look in the json
          state_entity.name = state.nome; // change the attribute to your case look in the json
          await manager.save(state_entity);
          const cities = state.cidades.map((city_name: string) => {
              const city_entity = new City();
              city_entity.name = city_name; // change the attribute to your case look in the json
              city_entity.state = state_entity; 
              return city_entity;
          });
          state_entity.cities = cities;
          await manager.save(City, cities);
      }
  });
    console.log("Data saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
