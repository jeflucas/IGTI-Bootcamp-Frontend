const app = Vue.createApp({
    data() {
        return{
            title: 'BRL to USD',
            subtitle: 'A siple curency conversor',
            logo: 'https://www.svgrepo.com/show/59997/dollar-sign.svg',
            BRL: '',
            USD: '',
            total: '',
        }
    },
    methods: {
        calcRate(){
            this.total = this.BRL / this.USD;
        },
        reset(){
            this.BRL = 0;
            this.USD = 0;
        }
    },
})

app.mount('#app')