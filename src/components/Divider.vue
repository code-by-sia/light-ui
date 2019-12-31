<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<template>
  <div class="light-divider light"></div>
</template>
<style lang="scss" scoped>
.light {
  &-divider {
    border-left: dotted thin #cccccc;
  }
  &.vertical {
    .light-divider {
      border-left: none;
      border-bottom: dotted thin #cccccc;
    }
  }
}
</style>
