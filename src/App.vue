<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Action from "@/components/Action.vue";

@Component({
  components: { Action }
})
export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <Action>Example</Action>
  </div>
</template>

<style lang="scss" scoped>
body {
  display: flex;
}

#app {
  display: flex;
}
</style>
