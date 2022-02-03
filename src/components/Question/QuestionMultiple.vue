<template>
	<template v-if="question.type === 'multiple' && question.answers.length > 0">
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
	},
}
</script>
