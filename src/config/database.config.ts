import { Pool } from 'pg';

const pool = new Pool({
	host: 'localhost',
	port: 5455,
	user: 'postgres',
	password: '12345678',
	database: 'postgresDB'
	
});

export default pool;
