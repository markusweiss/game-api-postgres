import { Pool } from 'pg';

const pool = new Pool({
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT as unknown as number || 5455, //localTestPort
	user: process.env.DB_USER || 'postgres', //localTestUser
	password: process.env.DB_PASSWORD || '123456789', //localTestPassword
	database: process.env.DB_DATABASE || 'postgresDB', //localTestDB
	//connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
	
});

export default pool;
