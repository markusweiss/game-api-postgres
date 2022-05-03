import { Pool } from 'pg';

const pool = new Pool({
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT as unknown as number || 5455, //5432 default
	user: process.env.DB_USER || 'postgres',
	password: process.env.DB_PASSWORD || '12345678',
	database: process.env.DB_DATABASE || 'postgresDB'
	
});

export default pool;
