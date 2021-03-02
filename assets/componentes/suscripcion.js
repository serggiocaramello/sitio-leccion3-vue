
Vue.component('suscripcion',{
    template:`
    <div class="container p-2  text-light bg-dark " >
        <div class="row">
            <div class="col-8 text-left ">
            <h2>{{suscripcionText}}</h2>
            </div>
            
            <div class="col-4 text-center p1">
                <h6>{{ message02 }}</h6>
                <div>
                    <input type="text" v-model="mail" placeholder="E-mail">
                    <button class="btn-warning" v-on:click="Ecorreo">OK</button>
                </div>
            </div>
        </div>
    </div>

`,

data() {
    return{
        suscripcionText: 'Líder en servicios de bienes raíces',
        message02: 'Subscribete a nuestras noticias',
        mail:'E-mail',  
        
    };
},
methods:{
    Ecorreo(){
        console.log('diste click');
    }
}

});