console.log('HI, I am java and I am working fine');

// BASE DATI 

// Dato un array di oggetti letterali con:
//  - url dell'immagine
//  - titolo
//  - descrizione


// <---------------------------------------------------INIZIO-------------------------------------------->

// <----------------------------------------------------DATI--------------------------------------------->

const images = [

    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// <------------------------------------CREARE IL CAROSELLO--------------------------------------->


// Creare un carosello:

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
// costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// <------------------------------------MANIPOLAZIONE DEL DOM--------------------------------------->


// STEP 1. SELEZIONARE il CAROUSEL DELL'HTML

const carous = document.querySelector('.carousel');

// <---------------------CICLO FOR PER INSERIRE GLI ELEMENTI NEL DOM-------------------------------->

// STEP 2. CREARE UN CICLO FOR PER INSERIRE PIU ELEMENTI DA INSERIRE NEL CAROUSEL


for (let i = 0; i < images.length; i++) { // a partire da 0 - fin quando i è minore della lunghezza di images (l'array) - incrementando di 1 in 1

    // STEP 3. INSERIRE LE SLIDE NEL CAROUSEL

    //  all'intero del carousel bisogna AGGIUNGERE (quindi +=)
    // e non SOSTITUIRE (=) gli elementi da inserire

    carous.innerHTML += `<div class="slide">
                             <img src="${images[i].image}">
                             <div class="title-position">
                             ${images[i].title}
                             </div>
                             <div class="text-position">
                             ${images[i].text}
                             </div>
                         </div>`
}



// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// <------------------------------------MANIPOLAZIONE DEL DOM--------------------------------------->

// 5. SELEZIONARE TUTTI I DIV CON CLASSE SLIDE

const allSlide = document.querySelectorAll('.slide')


// <-----------------------CREAZIONE FRECCE DI SCORRIMENTO------------------------------------------>


// Innazitutto creo due costanti per selezionare i due bottoni:

const nextArrow = document.querySelector('.next');
const previousArrow = document.querySelector('.previous')

// Aggiungo la classe current al valore 0 (prima immagine)

allSlide[0].classList.add('current') //current su CSS ha valore block

// Determino una variabile iniziale per il valore 0

let current = 0; // la classe current parte dalla picture in position 0


// Milestone 2:

// <------------------------------------CREZIONE EVENTO--------------------------------------->


// Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra,
// l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso sinistra.

// creo un evento

nextArrow.addEventListener('click', // quando clicco su nextArrow:

        function() {
         
        // rimuovo current dalla slide corrente  

        allSlide[current].classList.remove('current');

        //se quando clicco sono sull'ultima slide:

        if (current == allSlide.length - 1) {

        //torna alla slide 0

            current = 0;
    
        //altrimenti:

        } else {
        
        //Scorri sulla slide succesiva
            current = current + 1;

        }

        //e infine, aggiungi la classe current alla slide

        allSlide[current].classList.add('current');    
    }


);

//Quando clicco su PREVIOUS arrow:

previousArrow.addEventListener('click',

        function() {
            
            // rimuovo current dalla slide corrente  

            allSlide[current].classList.remove('current');

            // SE ci troviamo sull'ultima slide, torna alla slide 0

            if (current == allSlide.length - 5) {

                current = allSlide.length - 1            
            }

            //ALTRIMENTI:

            else {
            
            // procedi alla slide precedente
            
                current = current -1;
            } 

            //e infine, aggiungi la classe current alla slide

            allSlide[current].classList.add('current');

        }

)


// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: