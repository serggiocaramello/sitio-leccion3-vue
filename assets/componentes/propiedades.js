Vue.component("mycard", {
  template: /*html*/ `
  <div class="row d-flex justify-content-around">
      <div v-for="carta in cards"  class="col-12 col-sm-6 mb-3">
      <div class="card" v-bind:style="{backgroundColor: styles.cardBColor}"
      >
          <div style="position:relative" class="card-img-container">
            <img  v-bind:src="carta.src" class="card-img-top" alt="carta.titulo">
            <div class="">
              <img src="./assets/img/rent_bt-mod-top.png" style="position:absolute; top:0; left:0">
              <div style="position:absolute; top:0; left:35px; font-size: 14px;">{{carta.rentBuy}}
              </div>
            </div>
            <div>
            <img src="./assets/img/rent_bt-mod-bot.png" style="position:absolute; bottom:0; right:0">
            <div style="position:absolute; bottom:0; right:10px; font-size: 14px;">Ref: {{carta.id}}</div>
            </div>
          </div>
          <div class="card__img-bottom-info"></div>
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <p class="fw-bold">Título</p>
              </div>
              <div class="col-8">
              <h5 class="card-title">{{carta.titulo}}</h5>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4">
                <p class="fw-bold">Texto</p>
              </div>
              <div class="col-8">
              <p class="card-text">{{carta.p}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p class="fw-bold">Etiqueta</p>
              </div>
              <div class="col-8">
              <p class="card-text">{{carta.tag}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <p class="fw-bold">Precio</p>
              </div>
              <div class="col-8">
              <p class="card-text">{{carta.precio}}</p>
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
      `,
  data() {
    return {
      cards: [
        {
          titulo: "Titulo carta 1",
          src: "./assets/img/photo1.jpg",
          p:
            " Quisque dapibus sem sapien, ac facilisis nisl imperdiet sit amet. Nam sem libero, facilisis eget quam sed, venenatis sagittis est. Mauris viverra sagittis feugiat.",
          tag: "Etiqueta carta 1",
          precio: "2000€",
          rentBuy: "TO RENT",
          id: "XFT259KL1",
        },
        {
          titulo: "Titulo carta 2",
          src: "./assets/img/photo2.jpg",
          p:
            "Sed augue lectus, pulvinar imperdiet justo vel, lobortis malesuada eros. Mauris sed ligula a tellus gravida condimentum.",
          tag: "Etiqueta carta 2",
          precio: "2000€",
          rentBuy: "TO BUY",
          id: "XFT259KL2",
        },
      ],
      styles: {
        cardBColor: "#f4f4f4",
      },
    };
  },
});
