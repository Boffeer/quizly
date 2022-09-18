<template>
  <div
    v-if="questionLocal.show || admin.show"
    class="mr-2 border-2 mb-10 bg-white rounded-md p-2"
  >
    <button v-if="admin.show" @click="removeQuestion()">remove</button>
    <p>{{ question.question }}</p>
    <questions-list-input :question="question" />
    <slot name="input"></slot>
    <questions-list-textarea :question="question" />
    <questions-list-stepper :question="question" />
    <questions-list-single :question="question" />
    <questions-list-multiple :question="question" />
    <button @click="handleButtonNext($question)">Далее</button>
  </div>
</template>

<script>
import QuestionsListInput from './QuestionsListInput.vue';
import QuestionsListTextarea from './QuestionsListTextarea.vue';
import QuestionsListMultiple from './QuestionsListMultiple.vue';
import QuestionsListSingle from './QuestionsListSingle.vue';
import QuestionsListStepper from './QuestionsListStepper.vue';

export default {
  components: {
    QuestionsListInput,
    QuestionsListMultiple,
    QuestionsListSingle,
    QuestionsListStepper,
    QuestionsListTextarea,
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
    handleButtonNext(question) {
      this.$emit('button-next', question);
    },
    removeQuestion() {
      this.$emit('remove-question');
    },
  },
};
</script>
