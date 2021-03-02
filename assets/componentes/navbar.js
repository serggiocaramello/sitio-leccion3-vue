Vue.component('navbar',{
    template:/*html*/`
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./assets/img/logo.gif" alt="" width="150" height="50">
            </a>
            <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="link of links" :class="link.classLi">
                        <a :class="link.classA" href="#">{{link.texto}}</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    `,
    data(){
        return{
            links : [
                {classLi: 'nav-item', classA: 'nav-link active', texto: 'INICIO'},
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
