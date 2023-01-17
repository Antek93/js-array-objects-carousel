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

// <------------------------------------INSERIMENTO DATI NELL'ARRAY--------------------------------------->


// Creare un carosello:

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
// costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// STEP 1. SELEZIONARE il CAROUSEL DELL'HTML

const carous = document.querySelector('.carousel');

// STEP 2. CREARE UN CICLO FOR PER INSERIRE PIU ELEMENTI DA INSERIRE NEL CAROUSEL


for (let i = 0; i < images.length; i++) { // a partire da 0 - fin quando i è minore della lunghezza di images (l'array) - incrementando di 1 in 1

    // STEP 3. INSERIRE LE SLIDE NEL CAROUSEL

    //  all'intero del carousel bisogna AGGIUNGERE (quindi +=)
    // e non SOSTITUIRE (=) gli elementi da inserire

    carous.innerHTML += `<div class="slide">
                             <img src="${images[i].image}">
                         </div>`
}


// Milestone 1:

// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// 5. SELEZIONARE TUTTI I DIV CON CLASSE SLIDE

const allSlide = document.querySelectorAll('.slide')

// querySelectorAll crea già da sé un ARRAY 


// ADESSO PER AGGIUNGERE LA CLASSE CURRENT
// ad ogni elemento dell'array
// scorrendo con le frecce


// Innazitutto creo due costanti per selezionare i due bottoni:

const nextArrow = document.querySelector('.next');
const previousArrow = document.querySelector('.previous');

// Aggiungo la classe current al valore 0 (prima immagine)

allSlide[0].classList.add('current') //current su CSS ha valore block

// Determino una variabile iniziale per il valore 0

let current = 0;

// creo un evento


nextArrow.addEventListener('click', // quando clicco su nextArrow:

        function() {

        // Verifica se event funziona:
            console.log('cliccato su Next')
         
        // rimuovo current dalla slide 0    

        allSlide[current].classList.remove('current');

        // modifico la variabile 0 con 0 +1

        current = current + 1;

        //aggiungo nuovamente current alla slide,

        allSlide[current].classList.add('current');

        // ARRIVATI ALL'ULTIMA SLIDE RIMUOVO IL TASTO NEXT
        // se (slide corrente = all'ultima slide)
        // lunghezza array = 5 (con zero compreso)
        // 5 - 1 = slide 4 (l'ultima slide)

        if (current == allSlide.length - 1) {

        nextArrow.classList.add('hidden'); 

        }

        // Dopo la slide 0 rimuovo sempre hidden dal tasto PREVIOUS

        previousArrow.classList.remove('hidden');
        
    }


);

previousArrow.addEventListener('click', // quando clicco su nextArrow:

        function() {

            // Verifica se event funziona:
                console.log('cliccato su Next')
            
            // rimuovo current dalla slide 0    

            allSlide[current].classList.remove('current');

            // modifico la variabile 0 con 0 - 1

            current = current - 1;

            //aggiungo nuovamente current alla slide,

            allSlide[current].classList.add('current');

            // SE RITORNO ALLA PRIMA SLIDE RITORNA IL VALORE HIDDEN alla freccia previous
            // se (slide corrente = alla prima slide)
            // lunghezza array = 5 (con zero compreso)
            // 5 - 5 = slide 0 (prima slide)


            if (current == allSlide.length - 5) {

                previousArrow.classList.add('hidden'); 
        
                
            }

            if (current == allSlide.length - 5) {

                nextArrow.classList.remove('hidden'); 
        
                
            } 

        
        }

         // Dopo la slide 0 rimuovo sempre hidden dal tasto PREVIOUS

)
 

// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra, l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: