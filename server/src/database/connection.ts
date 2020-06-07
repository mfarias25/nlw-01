import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;



// path.resolve : Unce caminhos e padroniza o arquivo na pasta.
//__Dirname : Caminho para o diretorio do arquivo "DATABASE" que estamos chamando