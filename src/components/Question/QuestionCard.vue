<template>
  <div
    v-if="questionLocal.show || admin.showAll"
    class="mr-2 border-2 mb-10 bg-white rounded-md p-2"
  >
    <button v-if="admin.show" @click="removeQuestion()">remove</button>
    <p>{{ questionLocal.question }}</p>
    <question-input :question="questionLocal" />
    <slot name="input"></slot>
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
    QuestionInput,
    QuestionMultiple,
    QuestionSingle,
    QuestionStepper,
    QuestionTextarea,
  },
  props: {
    question: {
      type: Object,
      default() {
        return {
          show: 'false',
        };
      },
    },
    admin: {
      type: Object,
      default() {
        return {
          show: true,
          showAll: true,
        };
      },
    },
  },
  emits: {
    'button-next': null,
    'remove-question': null,
  },
  data() {
    return {
      questionLocal: this.question,
    };
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
