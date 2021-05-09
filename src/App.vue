<template>
  <neu-button>Test Button</neu-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NeuButton from "./components/button/NeuButton.vue";

export default defineComponent({
  name: "App",
  components: {
    NeuButton,
  },
  methods: {},
});
</script>
NeuButton

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
