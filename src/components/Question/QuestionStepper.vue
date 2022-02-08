<template>
  <div v-if="questionLocal.type === 'stepper'">
    <button class="bg-red-200 text-red-800" @click="decrement">−</button>
    <input
      class="border-2"
      v-model="questionLocal.answer"
      type="text"
      inputmode="numeric"
      @keyup="handleKeyup(question.answer)"
    />
    <button class="bg-green-200 text-green-800" @click="increment">+</button>
  </div>
</template>
<script>
export default {
  props: {
    question: {
      type: Object,
      default() {
        return {
          type: 'stepper',
          answer: '',
        };
      },
    },
  },
  data() {
    return {
      questionLocal: this.question,
      lastNumber: 0,
    };
  },
  methods: {
    decrement() {
      this.questionLocal.answer--;
      this.lastNumber = this.questionLocal.answer;
    },
    increment() {
      this.questionLocal.answer++;
      this.lastNumber = this.questionLocal.answer;
    },
    handleKeyup(answer) {
      if (isNaN(+answer)) {
        this.questionLocal.answer = this.lastNumber;
        return;
      }
      this.lastNumber = +answer;
      console.log(isNaN(+answer), typeof +answer);
      // if question.answer
    },
  },
};
</script>
