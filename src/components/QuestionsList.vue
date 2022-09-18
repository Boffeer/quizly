<template>
  <div class="">
    <questions-list-card
      v-for="question in questions"
      :key="question.label"
      :question="question"
      @remove-question="removeQuestion(question)"
      @button-next="handleButtonNext(question)"
    >
      <template #input> </template>
    </questions-list-card>
    <answers-table :questions="questions" />
  </div>
</template>
<script>
import QuestionsListCard from './QuestionsListCard.vue';
import AnswersTable from './AnswersTable.vue';
export default {
  components: {
    QuestionsListCard,
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
    'next-question': null,
  },
  data() {
    return {
      questionsLocal: this.questions,
    };
  },
  methods: {
    handleButtonNext(currentQuestion) {
      // let currentQuestionIndex = this.questions.indexOf(currentQuestion);
      // this.questionsLocal[currentQuestionIndex + 1].show = false;
      this.$emit('next-question', currentQuestion);
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
