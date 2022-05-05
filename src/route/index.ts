import express from 'express';
import Controller from '../controller';
import middleware from '../middleware';
import Validator from '../validator';


const router = express.Router();

router.get(
	'/',
	Controller.api
);

router.get(
	'/readAll',
	middleware.handleValidationError,
	Controller.readAll
);

router.get(
	'/readID/:id',
	Validator.checkId(),
	middleware.handleValidationError,
	Controller.readID
);

router.post(
	'/create/',
	Validator.checkCreate(),
	middleware.handleValidationError,
	Controller.create
);

export default router;
