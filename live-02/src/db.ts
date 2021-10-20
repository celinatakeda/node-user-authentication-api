import { Pool } from "pg";

const connectionString = 'postgres://'; // pegar a URL do banco de dados no postgres

const db = new Pool({ connectionString });

export default db;
