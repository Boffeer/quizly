export default class Question {
	id = 2;
	show = false;
	label = '';
	question = '';
	answer = null;

	constructor(startup) {
		this.id = startup.id;
		this.show = startup.show;
		this.label = startup.label;
		this.question = startup.question;
		this.type = startup.type;
	}
}
