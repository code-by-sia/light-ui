import Vue from "vue";
import VuiPanel from "@/components/Panel.vue";
import VuiDivider from "@/components/Divider.vue";
import VuiSpacer from "@/components/Spacer.vue";
import VuiGroup from "@/components/Group.vue";
import VuiAction from "@/components/Action.vue";

Vue.component("vui-panel", VuiPanel);
Vue.component("vui-divider", VuiDivider);
Vue.component("vui-action", VuiAction);
Vue.component("vui-spacer", VuiSpacer);
Vue.component("vui-group", VuiGroup);

export default {
  VuiPanel,
  VuiDivider,
  VuiAction,
  VuiGroup,
  VuiSpacer
};
