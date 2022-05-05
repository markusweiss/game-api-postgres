import { body } from 'express-validator';
class Validator {
	checkCreate() {
		return [
			body('gamer')
				.notEmpty()
				.withMessage('Gamer should not be empty'),
			body('score')
				.notEmpty() 
				.isNumeric()
				.withMessage('Score has to be a number')
		];
	}
}

export default new Validator();
