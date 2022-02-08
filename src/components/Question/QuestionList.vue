<template>
  <div class="">
    <question-card
      v-for="question in questionsLocal"
      :key="question.label"
      :question="question"
      @remove-question="removeQuestion(question)"
      @button-next="handleButtonNext(question)"
    >
      <template #input> </template>
    </question-card>
    <answers-table :questions="questionsLocal" />
  </div>
</template>
<script>
import QuestionCard from './QuestionCard.vue';
import AnswersTable from '../AnswersTable.vue';
export default {
  components: {
    QuestionCard,
    AnswersTable,
  },
  props: {
    questions: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: {
    'remove-question': null,
  },
  data() {
    return {
      questionsLocal: this.questions,
    };
  },
  methods: {
    handleButtonNext(currentQuestion) {
      let currentQuestionIndex = this.questions.indexOf(currentQuestion);
      this.questionsLocal[currentQuestionIndex + 1].show = true;
    },
    removeQuestion(currentQuestion) {
      this.questionsLocal = this.questions.filter(
        (question) => question != currentQuestion
      );

      this.$emit('remove-question', this.questionsLocal);
    },
  },
};
</script>
