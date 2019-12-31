<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Group extends Vue {
  @Prop({ default: "horizontal" })
  alignment!: "vertical" | "horizontal";

  @Prop({ default: false })
  merged!: boolean;

  get classes() {
    return `${this.alignment} ${this.merged ? "merged" : ""}`;
  }
}
</script>
<template>
  <div class="light-group light" :class="classes">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.light {
  &-group {
    display: flex;

    &.vertical {
      flex-direction: column;
      &.merged {
        > .light {
          border-radius: 0;
          &:not(.light-divider) {
            border-width: 0 thin;
          }
          &:first-child {
            border-top-width: thin;
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
      &.merged {
        > .light {
          &:not(.light-divider) {
            border-right-width: 0;
            border-left-width: 0;
          }
          border-radius: 0;
          &:first-child {
            border-left-width: thin;
            border-radius: 2px 0 0 2px;
          }
          &:last-child {
            border-right-width: thin;
            border-radius: 0 2px 2px 0;
          }
        }
      }
    }
  }
}
</style>
