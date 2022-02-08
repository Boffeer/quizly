<template>
  <template
    v-if="questionLocal.type === 'single' && questionLocal.answers.length > 0"
  >
    <label
      v-for="(answer, index) in questionLocal.answers"
      :key="index"
      class="border-2 border-red-100 px-10 py-1"
      :class="{
        'border-red-900': questionLocal.answer === answer.text,
      }"
    >
      <input
        v-model="questionLocal.answer"
        name="questionLocal.name"
        type="radio"
        :value="answer.text"
      />
      {{ answer.text }}
    </label>
  </template>
</template>
<script>
export default {
  props: {
    question: { type: Object, required: true },
  },
  data() {
    return {
      questionLocal: this.question,
    };
  },
};
</script>
