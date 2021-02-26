Vue.component("miaside", {
  props: ["name"],
  template: `<p class='text-center'>Hola <span class='text-danger'>Mundo</span></p>`,
});
new Vue({ el: "#aside" });
