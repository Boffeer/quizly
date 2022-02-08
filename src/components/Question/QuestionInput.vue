<template>
  <div v-if="questionLocal.type === 'input'">
    <input
      v-model="questionLocal.answer"
      type="text"
      class="border-2 border-green-300"
    />
  </div>
</template>
<script>
export default {
  props: {
    question: {
      type: Object,
      default() {
        return {
          type: 'input',
          answer: 'answer',
        };
      },
    },
  },
  data() {
    return {
      questionLocal: this.question,
    };
  },
};
</script>
