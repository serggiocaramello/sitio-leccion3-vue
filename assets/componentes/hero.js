Vue.component('hero',{
    template:/*html*/`
    <div class="container p-5 text-end text-white" :style="heroStyle">
        <h1 class=" display-1 fw-normal fst-italic" :style="bordeStyle"><strong>Invertir en bienes<br>
        raices es ver 10<br>
        años en el futuro</strong></h1>
    </div>
    `,
    data() {
        return{
            heroStyle: {
                backgroundImage: "url('./assets/img/header.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            },
            bordeStyle: '-webkit-text-stroke: 1px black'  
        };
    },
});
