Vue.component('afooter',{
    template:`
    <div class="container p-2 text-center text-black bg-light " :style="afooterStyle">
        {{footerText}} 
    </div>
    `,

 
    data() {
        return{
            footerText: '2021 | Lassure real estate',
            afooterStyle: {

            },
        };
    },
});

