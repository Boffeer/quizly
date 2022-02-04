<template>
  <div
    class="fixed bottom-0 left-u right-0 p-2 bg-slate-200 rounded max-w-xs h-2/6 overflow-auto"
    v-if="questions[0].answer"
  >
    <h2>Ответы</h2>
    <div v-for="question in questions" v-bind:key="question.label">
      <div v-if="question.answer">
        {{ question.question }} — {{ question.answer }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    questions: { type: Object, required: true },
  },
  data() {
    return {};
  },
};
</script>
