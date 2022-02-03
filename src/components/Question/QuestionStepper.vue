<template>
	<template v-if="question.type === 'stepper'">
		<button
			@click="decrement"
			class="bg-red-200 text-red-800"
		>
			−
		</button>
		<input
			@keyup="handleKeyup(question.answer)"
			v-model="question.answer"
			class="border-2"
			type="text"
			inputmode="numeric"
		>
		<button
			@click="increment"
			class="bg-green-200 text-green-800"
		>
			+
		</button>
	</template>
</template>
<script>
export default {
	props: {
		question: {type: Object, required: true},
	},
	data() {
		return {
			lastNumber: 0,
		}
	},
	mounted() {
		// this.question.answer = 0;
	},
	methods: {
		decrement() {
			this.question.answer--
			this.lastNumber = this.question.answer;
		},
		increment() {
			this.question.answer++
			this.lastNumber = this.question.answer;
		},
		handleKeyup(answer) {
			if (isNaN(+answer)) {
				this.question.answer = this.lastNumber;
				return
			};
			this.lastNumber = +answer;
			console.log(isNaN(+answer), typeof +answer)
			// if question.answer
		}
	},
	watch: {
		question: function(newQuestion, oldQuestion) {
			console.log(this)
			console.log(newQuestion)
		}
	}
}
</script>
