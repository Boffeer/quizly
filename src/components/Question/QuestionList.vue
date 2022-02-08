<template>
  <div class="">
    <question-card
      v-for="question in questions"
      :key="question.label"
      :question="question"
      :admin="admin"
      @remove-question="removeQuestion(question)"
      @button-next="handleButtonNext(question)"
    >
      <template #input> </template>
    </question-card>
    <answers-table :questions="questions" />
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
  data() {
    return {
      questions: [
        {
          id: 1,
          label: 'coins',
          type: 'textarea',
          question: 'Сколько монет',
          answer: [],
          show: true,
          answers: [
            {
              id: 1,
              text: 'Драники',
              isChecked: false,
            },
            {
              id: 2,
              text: 'Мочанка',
              isChecked: false,
            },
            {
              id: 3,
              text: 'Пивас',
              isChecked: false,
            },
          ],
        },
        {
          id: 2,
          label: 'food',
          type: 'multiple',
          question: 'Что выберешь?',
          answer: [],
          show: false,
          answers: [
            {
              id: 1,
              text: 'Драники',
              isChecked: false,
            },
            {
              id: 2,
              text: 'Мочанка',
              isChecked: false,
            },
            {
              id: 3,
              text: 'Пивас',
              isChecked: false,
            },
          ],
        },
        {
          id: 3,
          show: false,
          label: 'name',
          type: 'input',
          question: 'Как тебя зовут?',
          answer: null,
        },
        {
          id: 4,
          show: false,
          label: 'sex',
          type: 'single',
          question: 'Пол',
          answer: '',
          answers: [
            {
              id: 1,
              text: 'М',
            },
            {
              id: 2,
              text: 'Ж',
            },
          ],
        },
        {
          id: 5,
          label: 'age',
          type: 'input',
          question: 'Сколько тебе лет?',
          answer: null,
          show: false,
        },
      ],
    };
  },
  methods: {
    handleButtonNext(currentQuestion) {
      let currentQuestionIndex = this.questions.indexOf(currentQuestion);
      this.questions[currentQuestionIndex + 1].show = true;
    },
    removeQuestion(currentQuestion) {
      this.questions = this.questions.filter(
        (question) => question != currentQuestion
      );
      console.log(this.questions);
    },
  },
};
</script>
