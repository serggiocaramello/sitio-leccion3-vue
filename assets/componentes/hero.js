Vue.component('hero',{
    template:/*html*/
    `
    <div class="container p-5 text-end text-white" style="background-image: url('./assets/img/header.jpg'); background-repeat: no-repeat; background-size: cover">
        <h1 class=" display-1" style="-webkit-text-stroke: 1px black"><strong>Invertir en bienes<br>
        raices es ver 10<br>
        años en el futuro</strong></h1>
    </div>
    `
})

var hero = new Vue ({
    el: '#hero'
})