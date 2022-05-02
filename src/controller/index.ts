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
	/*
	async read(req: Request, res: Response) {
		pg.connect(onConnect);
		function onConnect(err, client, release) {
			if (err) return res.send(err);
			client.query('SELECT * from gamescore', function onResult(err, result) {
				release();
				res.send(err || result.rows);
			});
		}
	}
    */

	async read(req: Request, res: Response) {
		try {
			const client = await pool.connect();
			const queryString = 'SELECT * FROM gamescore';
			client.query(
				queryString, function onResult(err, result) {
					client.release();
					res.send(err || result.rows);
				});
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
