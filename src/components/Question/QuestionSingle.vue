<template>
	<template v-if="question.type === 'single' && question.answers.length > 0">
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
	</template>
</template>
<script>
export default {
	props: {
		question: {type: Object, required: true},
	},
	data() {
		return {

		}
	}
}
</script>
