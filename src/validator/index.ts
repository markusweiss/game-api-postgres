import { body, param } from 'express-validator';
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

	checkId() {
		return [
			param('id')
				.notEmpty()
				.withMessage('Id has to be filled')
				.isInt()
				.withMessage('The id shoud be a number')
		];
	}
}

export default new Validator();
