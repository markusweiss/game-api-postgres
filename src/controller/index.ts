import { Request, Response } from 'express';
import pool from '../config/database.config';

class Controller {
	async api(req: Request, res: Response) {
		try {
			return res.json({
				msg: 'api is ok',
				status: 200,
				route: '/api'
			});}
		catch (e) {
			return res.json({
				msg: 'fail to read api',
				status: 500,
				route: '/api'
			});
		}
	}
    
	async read(req: Request, res: Response) {
		try {
			const client = await pool.connect();
			const queryString = 'SELECT * FROM gamescore';
			client.query(
				queryString
			).then(res => {
				client.release();
				console.log(res.rows[0]);
			});
			res.status(200).send(res);
		} catch (e) {
			return res.json({
				msg: 'fail to read record',
				status: 500,
				route: '/read'
			});
		}
	}
}

export default new Controller();
