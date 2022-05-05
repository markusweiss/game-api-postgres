import { query } from 'express-validator';
class Validator {
	checkCreate() {
		return [
			query('gamer')
				.notEmpty()
				.withMessage('Gamer should not be empty'),
			query('score')
				.notEmpty() 
				.isNumeric()
				.withMessage('Score have to be a number')
		];
	}
}

export default new Validator();
