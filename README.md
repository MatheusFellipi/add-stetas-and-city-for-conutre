
## Sobre 

o script e para salvar as cidade e estados usando typeorm em node.js.
apenas salvar todas as cidade e estado no banco 

- [TypeormORM](https://typeorm.io/)
  
## Primeiros Passos

Siga os passos abaixo dentro da pasta após clonar ou baixar o projeto:

```bash
# Instalar as dependências do projeto
$ yarn install

ou

$ npm install
```

```bash
# Rodar o projeto
$ yarn start

ou

$ npm start
```

## mudar dados

- instalar o drive do banco

  ```
    for MySQL or MariaDB

    npm install mysql --save (you can install mysql2 instead as well)

    for PostgreSQL or CockroachDB

    npm install pg --save

    for SQLite

    npm install sqlite3 --save

    for Microsoft SQL Server

    npm install mssql --save

    for sql.js

    npm install sql.js --save

    for Oracle

    npm install oracledb --save
  ```
- nao esquece de mudar os dados da conexão do banco para criar os dados

  ```
    export const dbConnection = new DataSource({
      type: "[postgres]", // mudar para o banco que voce esta usando
      host: "localhost",
      port: 5432,
      username: "[username]", // mudar
      password: "[password]", // mudar
      database: "[database]", // mudar
      entities: [City, State], // so en caso de mudar os nome da entidades
    });
  ```
