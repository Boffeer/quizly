<template>
  <div>
    <input
      v-if="question.type === 'input'"
      v-model="question.answer"
      type="text"
      class="border-2 border-green-300"
    />
  </div>
</template>
<script>
export default {
  props: {
    question: { type: Object, required: true },
  },
  data() {
    return {};
  },
};
</script>
