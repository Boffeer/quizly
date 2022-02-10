<template>
  <div>
    <textarea
      v-if="questionLocal.type === 'textarea'"
      v-model="questionLocal.answer"
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
    return {
      questionLocal: this.question,
    };
  },
};
</script>
