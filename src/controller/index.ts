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

	async readAll(req: Request, res: Response) {
		try {
			const result = await pool.query('SELECT * FROM gamescore');
			res.json(result.rows);
		} catch (e) {
			return res.json({
				msg: 'fail to read record',
				status: 500,
				route: '/read'
			});
		}
	}

	async readID(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const result = await pool.query('SELECT * FROM gamescore WHERE id = $1', [id]);
        
			if (result.rows.length === 0)
				return res.status(404).json({ message: 'Task not found' });
        
			res.json(result.rows[0]);
		} catch (e) {
			return res.json({
				msg: 'fail to read id',
				status: 500,
				route: '/readID'
			});
		}
	}

	async create(req: Request, res: Response) {
		try {
			const { gamer, score } = req.body;
        
			const newTask = await pool.query(
				'INSERT INTO gamescore (gamer, score) VALUES($1, $2) RETURNING *',
				[gamer, score]
			);
			res.json(newTask.rows[0]);
		}catch (e) {
			return res.json({
				msg: 'fail to create',
				status: 500,
				route: '/create'
			});
		}
	}

}

export default new Controller();
