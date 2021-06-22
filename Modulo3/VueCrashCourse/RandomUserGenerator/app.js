const app = Vue.createApp({
    data() {
        return {
            firstName: 'Jeff',
            lastName: 'Lucas',
            email: 'jef.lucas@hotmail.co.uk',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/11.jpg'
        }
    },
    methods: {
        getUser(){
            this.firstName = 'Xerxes',
            this.lastName = 'Silva',
            this.email = 'xexeudasgatas@hotmail.co.uk',
            this.gender = 'male',
            this.picture = 'https://randomuser.me/api/portraits/men/21.jpg'
        }
    },
})

app.mount('#app')