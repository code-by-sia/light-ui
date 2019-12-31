<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Action from "@/components/Action.vue";
import Group from "@/components/Group.vue";
import Spacer from "@/components/Spacer.vue";
import Divider from "@/components/Divider.vue";
import Panel from "@/components/Panel.vue";

@Component({
  components: {
    Action,
    Group,
    Spacer,
    Divider,
    Panel
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

    <Group merged="true">
      <Panel label="Group 1">
        <Group merged="true">
          <Action>Bold</Action>
          <Divider />
          <Action>Italic</Action>
          <Divider />
          <Action>underline</Action>
        </Group>
        <div
          style="width:40px;height:40px;border:solid 2px red;margin:4px;"
        ></div>
      </Panel>
      <Divider />
      <Panel label="group 2">
        <Group alignment="vertical" merged="true" style="width:100px;">
          <action label="Open" />
          <action label="Save" />
          <action label="Reload" />
        </Group>
      </Panel>
      <Panel label="Yad ayada" style="flex:1">
        <group>
          <Spacer />yada yada
          <Spacer />
        </group>
      </Panel>
    </Group>

    <panel label="Toolbox">yada yada</panel>
  </div>
</template>

<style lang="scss" scoped>
body {
  display: flex;
  font-size: 16px;
}

#app {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  > .light {
    margin: 5px 0;
  }
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
}
</style>
