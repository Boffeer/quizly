<template>
  <div class="bg-cyan-900 text-white p-5">
    <label class="mb-2 block">
      <input v-model="adminLocal.show" type="checkbox" /> Admin is
      {{ adminLocal.show }}
    </label>
    <div v-if="adminLocal.show" class="admin">
      <input
        v-model="adminLocal.currentQuestion.question"
        type="text"
        class="border-2 border-gray-500 text-black"
      />
      <div class="mb-2">
        <label v-for="type in allowedQuestionTypes" :key="type" class="block">
          <input
            v-model="adminLocal.currentQuestion.type"
            :value="type"
            type="radio"
            name="questionType"
          />
          {{ type }}
        </label>
      </div>
      <div
        v-if="
          adminLocal.currentQuestion.type === 'single' ||
          adminLocal.currentQuestion.type === 'multiple'
        "
        class="mb-2"
      >
        <input
          v-model="adminLocal.currentQuestion.answer"
          type="text"
          class="mb-2 border-2 text-black"
        />
        <div
          v-for="(answer, index) in adminLocal.currentQuestion.answers"
          :key="index"
          class="flex"
        >
          <p class="mr-2">
            {{ answer.text }}
          </p>
          <button
            class="p-2 bg-red-400 text-white rounded"
            @click="removeAnswer(answer)"
          >
            ×
          </button>
        </div>
        <button class="mb-2 p-2 bg-green-100 text-green-800" @click="addAnswer">
          Add answer
        </button>
        <hr />
      </div>

      <button
        class="bg-orange-200 text-orange-900 rounded p-2 text-bold"
        @click="createQuestion"
      >
        Create question
      </button>
      <p>
        type "{{ adminLocal.currentQuestion.type }}" width text "{{
          adminLocal.currentQuestion.question
        }}"
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    admin: {
      type: Object,
      default() {
        return;
      },
    },
  },
  emits: {
    'create-question': null,
  },
  data() {
    return {
      adminLocal: this.admin,
      allowedQuestionTypes: ['input', 'multiple', 'single', 'textarea'],
    };
  },
  methods: {
    createQuestion() {
      this.$emit('create-question', this.adminLocal.currentQuestion);

      this.adminLocal.currentQuestion.question = '';
      this.adminLocal.currentQuestion.answers = [];
    },
    addAnswer() {
      if (this.adminLocal.currentQuestion.answer === '') {
        return;
      }

      this.adminLocal.currentQuestion.answers.push({
        id: this.adminLocal.currentQuestion.answers.length,
        text: this.admin.currentQuestion.answer,
      });

      this.adminLocal.currentQuestion.answer = '';
    },
    removeAnswer(answer) {
      this.adminLocal.currentQuestion.answers =
        this.adminLocal.currentQuestion.answers.filter(
          (currentAnswer) => currentAnswer != answer
        );
    },
  },
};
</script>
