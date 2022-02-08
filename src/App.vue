<!--<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>-->
<template>
  <div class="flex justify-around pt-5">
    <div class="bg-gray-100 rounded-lg p-10 flex justify-around">
      <question-list
        :questions="questions"
        :admin="admin"
        @remove-question="removeQuestion"
      />
    </div>
    <admin-editor :admin="admin" @create-question="addQuestion" />
  </div>
</template>

<script>
import QuestionList from './components/Question/QuestionList.vue';
import AdminEditor from './components/AdminEditor.vue';

export default {
  name: 'App',
  components: {
    QuestionList,
    AdminEditor,
  },
  data() {
    return {
      appName: 'quizly',
      questions: [],
      questionss: [
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
      admin: {
        show: true,
        showAll: true,
        currentQuestion: {
          type: 'input',
          question: '',
          answer: '',
          answers: [],
        },
        questionTypes: [
          {
            id: 0,
            label: '',
          },
        ],
      },
    };
  },
  methods: {
    // handleSingleCheck(currentQuestion, currentAnswer) {
    // currentQuestion.answer = currentAnswer.text;
    // },
    handleMultipleCheck(currentQuestion, currentAnswer) {
      currentAnswer.isChecked = !currentAnswer.isChecked;
      if (currentQuestion.answer === null) currentQuestion.answer = '';
      const checkedAnswers = currentQuestion.answers.filter(
        (answer) => answer.isChecked
      );
      let answer = '';
      checkedAnswers.forEach((question, index, array) => {
        if (index < array.length - 1) {
          answer += `${question.text}, `;
        } else {
          answer += `${question.text}`;
        }
      });
      currentQuestion.answer = answer;
    },
    handleMultipleCheckPositioned(currentQuestion, currentAnswer) {
      currentAnswer.isChecked = !currentAnswer.isChecked;

      if (currentQuestion.answer === null) currentQuestion.answer = [];

      if (!currentAnswer.isChecked) {
        const indexToRemove = currentQuestion.answer.indexOf(
          currentAnswer.text
        );
        currentQuestion.answer.splice(indexToRemove, 1);
      }
      if (currentAnswer.isChecked)
        currentQuestion.answer.push(currentAnswer.text);
    },
    handleModal(modal) {
      modal.opened = !modal.opened;
    },
    addQuestion(e) {
      this.questions.push({
        id: this.questions.length,
        label: null,
        type: e.type,
        question: e.question,
        answer: [],
        show: true,
        answers: e.answers,
      });
    },
    removeQuestion(e) {
      console.log(e);
      this.questions = e;
    },
  },
};
</script>
