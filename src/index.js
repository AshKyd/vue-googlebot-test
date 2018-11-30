import Vue from "vue/dist/vue.common.js";
import VueApp from "./App";
var app = new Vue({
  el: "#app",
  components: { VueApp },
  template: `<VueApp />`,
  data: {
    message: "Hello Vue!"
  }
});
