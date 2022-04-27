import express from 'express';
import Middleware from '../middleware';
import Validator from '../validator';

const router = express.Router();

router.get(
	'/read',
	Middleware.handleValidationError,
	Validator.checkRead
);

export default router;
