var app = new Vue({
    el:'#app',
    data:{
        contacts:[
            {
                name:'Michele',
                avatar:'img/avatar_1.jpg',
                title: 'avatar_1',
                messages: [
                    {
                        date: '10/01/2021 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2021 15:50:00',
                        text: 'Ricordati di dargli da mangiare.',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2021 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name:'Fabio',
                avatar:'img/avatar_3.jpg',
                title: 'avatar_3',
                messages: [
                    {
                        date: '20/01/2021 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/01/2021 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/01/2021 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name:'Mario',
                avatar:'img/avatar_2.jpg',
                title: 'avatar_2',
                messages: [
                    {
                        date: '20/01/2021 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/01/2021 16:30:55',
                        text: 'Bene grazie! Stasera partita a calcietto ?',
                        status: 'received'
                    },
                    {
                        date: '20/01/2021 16:35:00',
                        text: 'Mi piacerebbe ma devo finire il progetto di Boolean.',
                        status: 'sent'
                    }
                ],
            },
            {
                name:'Samuele',
                avatar:'img/avatar_4.jpg',
                title: 'avatar_4',
                messages: [
                    {
                        date: '02/02/2021 16:30:00',
                        text: 'Ciao posso avere informazioni sulla vostra formazione ?',
                        status: 'sent'
                    },
                    {
                        date: '02/02/2021 16:30:55',
                        text: 'Certo, lascia la tua e-mail e verrai contattato il prima possibile.',
                        status: 'received'
                    },
                    {
                        date: '02/02/2021 16:35:00',
                        text: 'Ottimo, grazie per la disponibilità.',
                        status: 'sent'
                    }
                ],
            },
            {
                name:'Giulia',
                avatar:'img/avatar_io.jpg',
                title: 'avatar_io',
                messages: [
                    {
                        date: '02/01/2021 16:30:00',
                        text: 'Ciao da quanto tempo...',
                        status: 'sent'
                    },
                    {
                        date: '02/01/2021 16:30:55',
                        text: 'Eh si, sono un pò impegnata con gli studi.',
                        status: 'received'
                    },
                    {
                        date: '02/01/2021 16:35:00',
                        text: 'Mi ha fatto piacere risentirci, a presto.',
                        status: 'sent'
                    }
                ],
            },
            {
                name:'Lorenzo',
                avatar:'img/avatar_5.jpg',
                title: 'avatar_5',
                messages: [
                    {
                        date: '01/02/2021 16:30:00',
                        text: 'Ciao fatto gli esercizi ?',
                        status: 'sent'
                    },
                    {
                        date: '01/02/2021 16:30:55',
                        text: 'Ancora no, vedo se riesco a finirli in tempo.',
                        status: 'received'
                    },
                    {
                        date: '01/02/2021 16:35:00',
                        text: 'Ok ci sentiamo appena puoi.',
                        status: 'sent'
                    }
                ],
            },
            {
                name:'Luca',
                avatar:'img/avatar_7.jpg',
                title: 'avatar_7',
                messages: [
                    {
                        date: '10/02/2021 16:30:00',
                        text: 'Ciao ho il tuo numero tra i contatti, chi sei?',
                        status: 'sent'
                    },
                    {
                        date: '10/02/2021 16:30:55',
                        text: 'Ci siamo conosciuti a teatro, ricordi ?',
                        status: 'received'
                    },
                    {
                        date: '10/02/2021 16:35:00',
                        text: 'Ah si giusto, come va ?',
                        status: 'sent'
                    }
                ],
            },
            {
                name:'Giovanni',
                avatar:'img/avatar_8.jpg',
                title: 'avatar_8',
                messages: [
                    {
                        date: '10/02/2021 16:30:00',
                        text: 'Ciao, aguri per il tuo compleanno',
                        status: 'sent'
                    },
                    {
                        date: '10/02/2021 16:30:55',
                        text: 'Ciao, grazie. Stasera darò una festa, sei dei nostri ?',
                        status: 'received'
                    },
                    {
                        date: '10/02/2021 16:35:00',
                        text: 'Certamente, non mancherò.',
                        status: 'sent'
                    }
                ],
            },
            {
                name:'Marco Sebastiani',
                avatar:'img/avatar_3.jpg',
                title: 'account-user'
            }

        ],
        chatAttuale:0,
        newMex: '',
        newMexFinal: {
            date: '',
            text: '',
            status: 'sent'
        },
    },
    methods:{
        statusActive(i){
            this.chatAttuale= i;
        },

        sentMessage(){
            this.newMexFinal.text = this.newMex;
            this.contacts[this.chatAttuale].messages.push(this.newMexFinal);
            this.newMexFinal.date = moment().format('L LTS');
        }

    }
});