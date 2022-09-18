<!--<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>-->
<template>
  <div class="flex justify-around pt-5">
    <div class="last-quizes">
      <div v-for="(quiz, index) in quizes" :key="index">
        <button @click="useQuiz(quiz)">
          Квиз из {{ quiz.questions.length }} вопросов
        </button>
      </div>
    </div>
    <div class="bg-gray-100 rounded-lg p-10 flex justify-around">
      <question-list
        :questions="questions"
        :admin="admin"
        @remove-question="removeQuestion"
        @next-question="nextQuestion"
      />
    </div>
    <admin-editor
      :admin="admin"
      @create-question="addQuestion"
      @admin-toggle="admin = !admin"
    />
  </div>
  <button class="mr-2 bg-green-300 text-green-700" @click="saveQuiz">
    Save Quiz
  </button>
  <button class="mr-2 bg-orange-300 text-orange-700" @click="getQuizes">
    Get Quizes
  </button>
</template>

<script>
import QuestionList from './components/QuestionsList.vue';
import AdminEditor from './components/AdminEditor.vue';

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

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
      db: getFirestore(),
      quizes: [],
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
    nextQuestion(e) {
      e = JSON.parse(JSON.stringify(e));
      const nextQuestionId = ++e.id;
      this.questions[nextQuestionId].show = true;
    },

    async saveQuiz() {
      try {
        const cleanedQuiz = this.questions.map((question, index) => {
          if (index > 0) {
            question.show = false;
            question.answer = [];
          }
        });
        const docRef = await addDoc(collection(this.db, 'quizes'), {
          id: 1,
          questions: cleanedQuiz,
        });

        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    },
    async getQuizes() {
      const querySnapshot = await getDocs(collection(this.db, 'quizes'));
      let read = {};
      querySnapshot.forEach((doc) => {
        read[doc.id] = doc.data();
      });
      // console.log(read);
      this.quizes = read;
    },
    useQuiz(quiz) {
      this.questions = [];
      this.$nextTick(() => {
        const normalizedQuiz = JSON.parse(JSON.stringify(quiz));
        this.questions = normalizedQuiz.questions;
      });
    },
  },
};
</script>
