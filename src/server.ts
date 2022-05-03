import cors from 'cors';
import express from 'express';
import pool from './config/database.config';
import router from './route';

pool.connect().then(() => {
	console.log('Postgres connection ok');
});

const app = express();

const nodeEnv: number = process.env.PORT as unknown as number;

app.use(cors());

app.use(express.json());

app.use('/api/', router);

app.listen(nodeEnv || 3000, '0.0.0.0', () => {
	console.log('Node Server is running.');
});
