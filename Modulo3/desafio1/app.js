const app = Vue.createApp({
    data() {
        return{
            title: 'BRL to USD',
            subtitle: 'A siple curency conversor',
            logo: 'https://www.svgrepo.com/show/59997/dollar-sign.svg'
        }
    },
    methods: {
        calcRate(){
            console.log(this)
        },
        reset(){

        }
    },
})

app.mount('#app')