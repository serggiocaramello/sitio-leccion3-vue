Vue.component('navbar',{
    template:/*html*/`
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./assets/img/logo.gif" alt="" width="150" height="50">
            </a>
            <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">INICIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">COMPRAR</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ALQUILER</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FINANZAS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SERVICIOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">VENTAS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTACTENOS</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    `
})


var nav = new Vue ({
    el: "#navbar",
   
})