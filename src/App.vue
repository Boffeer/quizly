<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="">
	<div
		v-for="question in questions"
		v-bind:key="question.label"
	>
		<div
			v-if="question.show"
			class="border-2 border-blue-400 mb-10"
		>
			<p>{{ question.question }}</p>
			<input
				v-if="question.type === 'input'"
				v-model="question.answer" type="text"
				class="border-2 border-green-300"
			>
			<div v-if="question.type === 'single' && question.answers.length > 0">
				<button
					v-for="answer in question.answers"
					v-bind:key="answer.id"
					v-on:click="handleSingleCheck(question, answer)"
					name="question.name"
					class="border-2 border-red-100 px-10 py-1"
					v-bind:class="{
						'border-red-900': question.answer === answer.text,
					}"
				>
					{{ answer.text }}
				</button>
			</div>
			<div v-if="question.type === 'multiple' && question.answers.length > 0">
				<button
					v-for="answer in question.answers"
					v-bind:key="answer.id"
					v-on:click="handleMultipleCheck(question, answer)"
					name="question.name"
					class="border-2 border-red-100 px-10 py-1"
					v-bind:class="{
						'border-red-900': answer.isChecked,
					}"
				>
					{{ answer.text }}
				</button>
			</div>
			<button
				v-on:click="handleButtonNext(question)"
			>
				Далее
			</button>
		</div>
	</div>
	<form
			v-if="true || questions[0].answer"
	>
		<h2>Ответы</h2>
		<div
			v-for="question in questions"
			v-bind:key="question.label"
		>
			<div
				v-if="question.answer"
			>
				{{ question.question }} — {{ question.answer }}
			</div>
		</div>
	</form>
</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			appName: 'quizly',
			questions: [
				{
					"id": 1,
					"label": 'age',
					"type": "multiple",
					"question": "Что выберешь?",
					"answer": null,
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
							"id": 2,
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
					"answer": null,
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
		handleSingleCheck(currentQuestion, currentAnswer) {
			currentQuestion.answer = currentAnswer.text;
		},
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
	}
}
</script>
