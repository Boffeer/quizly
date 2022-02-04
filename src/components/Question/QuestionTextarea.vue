<template>
  <div>
    <textarea
      v-if="question.type === 'textarea'"
      v-model="question.answer"
      type="text"
      class="border-2 border-green-300"
      wrap="hard"
      style="resize: none"
    >
    </textarea>
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
