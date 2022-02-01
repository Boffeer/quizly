<template>
	<div
		v-if="question.show || admin.showAll"
		class="mr-2 border-2 mb-10 bg-white rounded-md p-2"
	>
		<button v-if="admin.show" @click="removeQuestion()">remove</button>
		<p>{{ question.question }}</p>
		<input
			v-if="question.type === 'input'"
			v-model="question.answer" type="text"
			class="border-2 border-green-300"
		>
		<div v-if="question.type === 'single' && question.answers.length > 0">
			<label
				class="border-2 border-red-100 px-10 py-1"
				v-for="answer in question.answers"
				:key="answer.id"
				:class="{
					'border-red-900': question.answer === answer.text,
				}"
			>
				<input
					name="question.name"
					type="radio"
					v-model="question.answer"
					:value="answer.text"
				>
				{{ answer.text }}
			</label>
		</div>
		<div v-if="question.type === 'multiple' && question.answers.length > 0">
			<label
				v-for="answer in question.answers"
				:key="answer.id"
				class="border-2 border-red-100 px-10 py-1"
				:class="{
					'border-red-900': question.answer.includes(answer.text),
				}"
			>
				<input
					type="checkbox"
					:name="question.name"
					v-model="question.answer"
					:value="answer.text"
				>
				{{ answer.text }}
			</label>
		</div>
		<button
			@click="handleButtonNext()"
		>
			Далее
		</button>
	</div>
</template>

<script>
export default {
	props: {
		question: Object,
		admin: Object
	},
	emits: {
		"single-check": '',
		"multiple-check": '',
		"button-next": '',
	},
	data() {
		return {

		}
	},
	methods: {
		handleSingleCheck() {
			this.$emit('single-check');
		},
		handleButtonNext() {
			this.$emit('button-next');
		},
		handleMultipleCheck() {
			this.$emit('multiple-check')
		},
		removeQuestion() {
			this.$emit('remove-question')
		}
	}

}
</script>
