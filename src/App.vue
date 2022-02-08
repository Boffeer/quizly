<!--<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>-->
<template>
  <div class="flex justify-around pt-5">
    <div class="bg-gray-100 rounded-lg p-10 flex justify-around">
      <question-list />
    </div>
    <admin-editor :admin="admin" />
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
      admin: {
        show: true,
        showAll: true,
        currentQuestion: {
          type: 'input',
          question: '',
        },
      },
      modal: {
        opened: false,
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
  },
};
</script>
