<template>
  <button :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "neu-button",
  props: {
    disabled: {
      type: Boolean,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
