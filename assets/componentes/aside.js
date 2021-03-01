Vue.component("miaside", {
  template: `
  <aside class="col-md-4">
    <div class="container">
      <h3 class="pb-3 mb-3 border-bottom border-dark">{{title1}}</h3>
      <p>{{p1}}</p>
      <h3 class="pb-3 mb-3 border-bottom border-dark">{{title2}}</h3>
      <article>
      <p><i class="text-warning fas fa-arrow-right me-2"></i>{{article1}}</p>
      <a class="text-warning" href="#" target="_blank">>>Read more</a>
      </article>
      <article>
      <p><i class="text-warning fas fa-arrow-right me-2"></i>{{article2}}</p>
      <a class="text-warning" href="#" target="_blank">>>Read more</a>
      </article>
    </div>
  </aside>`,
  data() {
    return {
      title1: "Conservador de Bienes Raíces.",
      p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet nisi nisl, quis porta risus iaculis ac.
      Etiam tempus id leo eget luctus. Duis rhoncus, tortor non finibus gravida, lacus nisi rutrum turpis, nec gravida mi nisi sit amet nunc.
      Quisque eget pellentesque nulla, posuere maximus arcu. Suspendisse efficitur arcu nec urna finibus, ac dignissim mi consectetur.`,
      title2: `Lorem ipsum dolor sit amet`,
      article1: `Ut purus urna, posuere at leo id, tristique ultrices quam. Nunc venenatis placerat ipsum id consequat. Nunc tristique nisl eget pulvinar ornare. Mauris pharetra sollicitudin ullamcorper.`,
      article2: `Donec dui massa, congue in sollicitudin sit amet, pharetra eu dui. Vivamus a diam et magna laoreet sagittis ac at diam. Vestibulum volutpat odio ut faucibus fringilla.`,
    };
  },
});
