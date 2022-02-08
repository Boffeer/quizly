<template>
  <div class="bg-cyan-900 text-white p-5">
    <label>
      <input v-model="adminLocal.show" type="checkbox" /> Admin is
      {{ adminLocal.show }}
    </label>
    <div v-if="adminLocal.show" class="admin">
      <div>
        <label>
          <input v-model="adminLocal.showAll" type="checkbox" /> show all
          questions
        </label>
      </div>
      <input
        v-model="adminLocal.currentQuestion.question"
        type="text"
        class="border-2 border-gray-500"
      />
      <div>
        <label>
          <input
            v-model="adminLocal.currentQuestion.type"
            type="radio"
            name="questionType"
            value="input"
          />
          Input
        </label>
        <label>
          <input
            v-model="adminLocal.currentQuestion.type"
            type="radio"
            name="questionType"
            value="single"
          />
          Single
        </label>
        <label>
          <input
            v-model="adminLocal.currentQuestion.type"
            type="radio"
            name="questionType"
            value="multiple"
          />
          Multiple
        </label>
        <!-- <button @click="createQuestion('text')">Text</button>
			<button>Single</button>
			<button>Multiple</button> -->
      </div>

      <button
        class="bg-orange-200 text-orange-900 rounded p-2 text-bold"
        @click="createQuestion"
      >
        Create question
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    admin: {
      type: Object,
      default() {
        return {
          show: true,
          showAll: true,
          currentQuestion: {},
        };
      },
    },
  },
  emits: {},
  data() {
    return {
      adminLocal: this.admin,
      questionTypes: [
        {
          id: 0,
          label: '',
        },
      ],
    };
  },
};
</script>
