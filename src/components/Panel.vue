<template>
  <div class="light-panel light">
    <div
      class="light-panel-content"
      :style="{ display: grid ? 'grid' : 'flex' }"
    >
      <slot />
    </div>
    <div class="light-panel-header" v-if="label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component({ name: "Panel" })
export default class Panel extends Vue {
  @Prop()
  public label?: string;
  @Prop({ default: true })
  public grid!: boolean;
}
</script>

<style lang="scss" scoped>
.light {
  &-panel {
    display: flex;
    background: #fff;
    box-shadow: 2px 2px 1px #cfcfcf;
    border-color: #ccc;
    border-top: thin solid #ccc;
    border-left: thin dotted #ccc;
    min-height: 20px;
    flex-direction: column;

    border-radius: 2px;
    border-style: solid;

    &-header {
      font-size: 0.8em;
      height: 20px;
      line-height: 20px;
      color: #aaa;
      font-weight: bold;
      background: -webkit-linear-gradient(to top, #ece9e6, #ffffff);
      background: linear-gradient(to top, #ece9e6, #ffffff);
      text-transform: uppercase;
      text-shadow: 1px 1px 0 #fff;
      text-align: center;
    }
    &-content {
      padding: 2px;
      flex: 1;
    }
  }
}
</style>
