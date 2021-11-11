// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue ({
    // el
    el: '#app',

    // struttura dati
    data : {
        firstname: '',
        lastname: '',
        title: 'color',
        image: '',
        message: '',
    },
    // metodi, dove inserire le funzioni
    methods: {
        changeBlu () {
            console.log('click');
            this.title = 'blue';
        },

        changeRed () {
            // console.log('click');
            console.log('click');
            this.title = 'red';
        },

        sayWelcome () {
            // console.log('click');
            this.image = 'https://picsum.photos/300/300';
            this.message = '\u2665';
        },
    }
});