<template>
  <div
    class="popup__overlay bg-black/50 fixed left-0 top-0 w-full h-full"
    @click="handleModal"
  >
    <div class="popup__aligner flex items-center justify-center w-full h-full">
      <div class="popup bg-white rounded-lg p-4" @click.stop>
        <slot name="message" :message="message"></slot>
        <button
          class="popup__button rounded-md bg-blue-200 text-blue-500 py-1 px-5"
          @click="handleModal"
        >
          ОК
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { logModal } from '../../api/modal';

export default {
  emits: {
    'toggle-modal': null,
  },
  data() {
    return {
      modal: 'Модалка',
      opened: true,
    };
  },
  methods: {
    handleModal() {
      this.$emit('toggle-modal');
      this.opened = !this.opened;
      logModal();
    },
  },
};
</script>
