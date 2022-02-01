import Question from './Question';

export default class TextQuestion extends Question {
	id = 2;
	show = false;
	label = '';
	question = '';
	answer = null;

	constructor(startup) {
		super.constructor(startup)

		this.type = 'input'
	}

	static createQuestion(startup) {
		console.log(startup)
		return new Question(startup);
	}
}
