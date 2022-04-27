import { Client } from 'pg';

const db = new Client({
	host: '192.168.178.54',
	port: 5455,
	user: 'postgres',
	password: '12345678',
	database: 'postgresDB'
	
});

export default db;
