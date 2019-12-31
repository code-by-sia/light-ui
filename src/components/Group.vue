<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Group extends Vue {
  @Prop({ default: "horizontal" })
  alignment!: "vertical" | "horizontal";

  @Prop({ default: false })
  actions!: boolean;

  get classes() {
    return `${this.alignment} ${this.actions ? "actions" : ""}`;
  }
}
</script>
<template>
  <div class="light-group" :class="classes">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.light {
  &-group {
    display: flex;
    gap: 5px;

    &.vertical {
      flex-direction: column;
      &.actions {
        & .light-action {
          border-radius: 0;
          border-bottom-width: 0;
          &:first-child {
            border-radius: 2px 2px 0 0;
          }
          &:last-child {
            border-radius: 0 0 2px 2px;
            border-bottom-width: thin;
          }
        }
      }
    }
    &.horizontal {
      flex-direction: row;
      &.actions {
        & .light-action {
          border-radius: 0;
          border-right-width: 0;
          &:first-child {
            border-radius: 2px 0 0 2px;
          }
          &:last-child {
            border-radius: 0 2px 2px 0;
            border-right-width: thin;
          }
        }
      }
    }
  }
}
</style>
