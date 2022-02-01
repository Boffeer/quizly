<template>
	<label>
		<input type="checkbox" v-model="admin.show"> Admin is {{ admin.show }}
	</label>
	<div v-if="admin.show" class="admin">
		<div>
			<div>
				<label>
					<input type="checkbox" v-model="admin.showAll"> show all questions
				</label>
			</div>
			<input type="text" class="border-2 border-gray-500" v-model="admin.currentQuestion.question">
			<div>
				<label>
					<input type="radio" name="questionType" value="input" v-model="admin.currentQuestion.type">
					Input
				</label>
				<label>
					<input type="radio" name="questionType" value="single" v-model="admin.currentQuestion.type">
					Single
				</label>
				<label>
				<input type="radio" name="questionType" value="multiple" v-model="admin.currentQuestion.type">
					Multiple
				</label>
			<!-- <button v-on:click="createQuestion('text')">Text</button>
			<button>Single</button>
			<button>Multiple</button> -->
			</div>
			<button v-on:click="createQuestion" class="bg-orange-200 text-orange-900 rounded p-2 text-bold">Create question</button>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		admin: Object
	},
	emits: {
	},
	data() {
		return {

		}
	},
}
</script>
