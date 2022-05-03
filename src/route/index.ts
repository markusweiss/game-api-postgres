import express from 'express';
import Controller from '../controller';

const router = express.Router();

router.get(
	'/',
	Controller.api
);

router.get(
	'/readAll',
	Controller.readAll
);

router.get(
	'/readID/:id',
	Controller.readID
);

router.post(
	'/create/',
	Controller.create
);

export default router;
