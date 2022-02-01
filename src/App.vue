<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="flex justify-around pt-5">
	<div class="bg-gray-100 rounded-lg p-10 flex justify-around">
		<div class="">
			<question-card
				v-for="question in questions"
				:key="question.label"
				:question="question"
				:admin="admin"
				@remove-question="removeQuestion(question)"
				@button-next="handleButtonNext(question)"
			/>
		</div>
		<answers-table :questions="questions" />
	</div>

	<admin-editor :admin="admin" />
</div>
</template>

<script>

// import Question from './classes/Question';
import InputQuestion from './classes/InputQuestion';
import QuestionCard from './components/QuestionCard.vue';
import AdminEditor from './components/AdminEditor.vue';
import AnswersTable from './components/AnswersTable.vue';

export default {
	name: "App",
	data() {
		return {
			appName: 'quizly',
			admin: {
				show: true,
				showAll: true,
				currentQuestion: {
					type: 'input',
					question: '',
				}
			},
			questions: [
				{
					"id": 1,
					"label": 'food',
					"type": "multiple",
					"question": "Что выберешь?",
					"answer": [],
					"show": true,
					"answers": [
						{
							"id": 1,
							"text": "Драники",
							"isChecked": false,
						},
						{
							"id": 2,
							"text": "Мочанка",
							"isChecked": false,
						},
						{
							"id": 3,
							"text": "Пивас",
							"isChecked": false,
						},
					]
				},
				{
					"id": 2,
					"show": false,
					"label": 'name',
					"type": "input",
					"question": "Как тебя зовут?",
					"answer": null,
				},
				{
					"id": 3,
					"show": false,
					"label": 'sex',
					"type": "single",
					"question": "Пол",
					"answer": '',
					"answers": [
						{
							"id": 1,
							"text": "М",
						},
						{
							"id": 2,
							"text": "Ж",
						}
					]
				},
				{
					"id": 4,
					"label": 'age',
					"type": "input",
					"question": "Сколько тебе лет?",
					"answer": null,
					"show": false,
				},
			],
		}
	},
	methods: {
		// handleSingleCheck(currentQuestion, currentAnswer) {
			// currentQuestion.answer = currentAnswer.text;
		// },
		handleMultipleCheck(currentQuestion, currentAnswer) {
			currentAnswer.isChecked = !currentAnswer.isChecked;
			if (currentQuestion.answer === null) currentQuestion.answer = ''
			const checkedAnswers = currentQuestion.answers.filter(answer => answer.isChecked);
			let answer = '';
			checkedAnswers.forEach((question, index, array) => {
				if (index < array.length - 1) {
					answer += `${question.text}, `;
				} else {
					answer += `${question.text}`;
				}
			})
			currentQuestion.answer = answer;
		},
		handleMultipleCheckPositioned(currentQuestion, currentAnswer) {
			currentAnswer.isChecked = !currentAnswer.isChecked;

			if (currentQuestion.answer === null) currentQuestion.answer = [];

			if (!currentAnswer.isChecked) {
				const indexToRemove = currentQuestion.answer.indexOf(currentAnswer.text);
				currentQuestion.answer.splice(indexToRemove, 1);
			}
			if (currentAnswer.isChecked) currentQuestion.answer.push(currentAnswer.text)
		},
		handleButtonNext(currentQuestion) {
			let currentQuestionIndex = this.questions.indexOf(currentQuestion);
			this.questions[currentQuestionIndex + 1].show = true;
		},
		removeQuestion(currentQuestion) {
			this.questions = this.questions.filter((question) => question != currentQuestion)
			console.log(this.questions)
		},
	},
}
</script>
