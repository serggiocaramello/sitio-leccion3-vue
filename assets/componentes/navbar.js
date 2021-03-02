Vue.component('navbar',{
    template:/*html*/`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./assets/img/logo.gif" alt="" width="150" height="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-sm-flex flex-row-reverse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="link of links" :class="link.classLi">
                        <a :class="link.classA" :aria-current="link.ariaCurrent" href="#">{{link.texto}}</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    `,
    data(){
        return{
            links : [
                {classLi: 'nav-item', classA: 'nav-link active', ariaCurrent: 'page', texto: 'INICIO'},
                {classLi: 'nav-item', classA: 'nav-link', texto: 'COMPRAR'},
                {classLi: 'nav-item', classA: 'nav-link', texto: 'ALQUILER'},
                {classLi: 'nav-item', classA: 'nav-link', texto: 'FINANZAS'},
                {classLi: 'nav-item', classA: 'nav-link', texto: 'SERVICIOS'},
                {classLi: 'nav-item', classA: 'nav-link', texto: 'VENTAS'},
                {classLi: 'nav-item', classA: 'nav-link', texto: 'CONTACTENOS'}
            ]
        }
        
    }
});
