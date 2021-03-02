Vue.component("miaside", {
  template: `
  <aside class="col-md-4 order-md-0 px-md-4">
      <h3 class="pb-3 mb-3 border-bottom border-dark">{{title1}}</h3>
      <p>{{p1}}</p>
      <h3 class="pb-3 mb-3 border-bottom border-dark">{{title2}}</h3>
      <article>
      <p><i class="text-warning fas fa-arrow-right me-2"></i>{{article1}}</p>
      <a class="w-100 text-warning d-inline-block mb-3 text-end" href="#" target="_blank"><span>>>Read more</span></a>
      </article>
      <article>
      <p><i class="text-warning fas fa-arrow-right me-2"></i>{{article2}}</p>
      <a class="w-100 text-warning d-inline-block mb-3 text-end" href="#" target="_blank"><span>>>Read more</span></a>
      </article>
  </aside>`,
  data() {
    return {
      title1: "Conservador de Bienes Raíces.",
      p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet nisi nisl, quis porta risus iaculis ac.
      Etiam tempus id leo eget luctus.`,
      title2: `Lorem ipsum dolor sit amet`,
      article1: `Ut purus urna, posuere at leo id, tristique ultrices quam. Nunc venenatis placerat ipsum id consequat. Nunc tristique nisl eget pulvinar ornare.`,
      article2: `Donec dui massa, congue in sollicitudin sit amet, pharetra eu dui.`,
    };
  },
});
