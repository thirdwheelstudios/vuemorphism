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

<style scoped lang="css">
button {
  border-radius: 1.5em;
  border: 0;
  padding: 0.8em 2em;
  background: #f1f3f8;
  box-shadow: 10px 10px 20px #e0e2e5, -10px -10px 20px #fff;
}

button:hover {
  box-shadow: 11px 11px 22px #e0e2e5, -10px -10px 20px #fff;
  cursor: pointer;
}
</style>
