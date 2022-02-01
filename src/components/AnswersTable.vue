<template>
	<div
			v-if="questions[0].answer"
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
	</div>
</template>
<script>

export default ({
	props: {
		questions: Object,
	},
	data() {
		return {

		}
	},
})
</script>
