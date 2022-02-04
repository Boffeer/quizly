<template>
  <div
    v-if="question.show || admin.showAll"
    class="mr-2 border-2 mb-10 bg-white rounded-md p-2"
  >
    <button v-if="admin.show" @click="removeQuestion()">remove</button>
    <p>{{ question.question }}</p>
    <question-input :question="question" />
    <question-textarea :question="question" />
    <question-stepper :question="question" />
    <question-single :question="question" />
    <question-multiple :question="question" />
    <button @click="handleButtonNext()">Далее</button>
  </div>
</template>

<script>
import QuestionInput from './QuestionInput.vue';
import QuestionTextarea from './QuestionTextarea.vue';
import QuestionMultiple from './QuestionMultiple.vue';
import QuestionSingle from './QuestionSingle.vue';
import QuestionStepper from './QuestionStepper.vue';

export default {
  components: {
    QuestionMultiple,
    QuestionSingle,
    QuestionStepper,
    QuestionInput,
    QuestionTextarea,
  },
  props: {
    question: Object,
    admin: Object,
  },
  emits: {
    'button-next': null,
    'remove-question': null,
  },
  data() {
    return {};
  },
  methods: {
    handleButtonNext() {
      this.$emit('button-next');
    },
    removeQuestion() {
      this.$emit('remove-question');
    },
  },
};
</script>
