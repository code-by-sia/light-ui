<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Action from "@/components/Action.vue";
import Group from "@/components/Group.vue";
import Spacer from "@/components/Spacer.vue";
import Divider from "@/components/Divider.vue";

@Component({
  components: {
    Action,
    Group,
    Spacer,
    Divider
  }
})
export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <Action>Example</Action>

    <Group>
      <Spacer />
      <Action>Action 1</Action>
      <span>Span</span>
      <span>Span 2</span>
      <Spacer />
      <Action>Action 2</Action>
      <Spacer />
    </Group>
    <Group>
      <strong>Item 1</strong>
      <strong>Item 2</strong>
      <strong>Item 3</strong>
      <Divider />
      <strong>Item 4</strong>
      <strong>Item 5</strong>
    </Group>

    <Group actions="true">
      <Action>Bold</Action>
      <Action>Italic</Action>
      <Action>underline</Action>
    </Group>

    <Group alignment="vertical" actions="true" style="width:100px;">
      <action label="Open" />
      <action label="Save" />
      <action label="Reload" />
    </Group>
  </div>
</template>

<style lang="scss" scoped>
body {
  display: flex;
  font-size: 14px;
}

#app {
  display: flex;
  justify-items: center;

  span {
    border: solid thin mediumaquamarine;
    padding: 0 5px;
  }
  strong {
    font-weight: normal;
    margin: 0 2px;
    padding: 2px 4px;
    background: lightblue;
  }

  span,
  .light-group {
    margin: 5px;
  }
}
</style>
