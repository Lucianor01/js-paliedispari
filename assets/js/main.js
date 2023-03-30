/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const container = document.querySelector('#container')

const inputText = document.querySelector('#input_text')

const button = document.querySelector('#button')

const div = document.createElement('div')

container.append(div)

button.addEventListener('click', function () {

    const controllo = palindroma((inputText.value));

    div.innerHTML = controllo

    inputText.value = '';
})

function palindroma(parola) {

    const reverse = parola.split('').reverse().join('');

    for (let i = 0; i < reverse.length; i++) {

        if (inputText.value[i] === reverse[i]) {
            return `<h3>${inputText.value} è una parola palindroma</h3>`
        } else {
            return `<h3>${inputText.value} non è una parola palindroma</h3>`
        }
    }
}

//! --------------------------------------------------------------------------------------------



/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. 
*/

const container2 = document.querySelector('#container_2')

const numeroUtente = document.querySelector('#numero')

const button2 = document.querySelector('#button_2')

const div2 = document.createElement('div')

container2.append(div2)

button2.addEventListener('click', function () {
    const controllo2 = numeroPariDispari(numeroUtente.value);

    div2.innerHTML = controllo2
    
    numeroUtente.value = '';
})

function numeroPariDispari(num) {

    let scelta = document.querySelector('#scelta').value;

    let numeroIA = Math.floor(Math.random() * 5) + 1;

    let somma = parseInt(num) + numeroIA;

    if (somma % 2 == 0) {
        risultatoSomma = 'Pari';
    } else {
        risultatoSomma = 'Dispari'
    }

    if (risultatoSomma == 'Pari' && scelta == 'pari') {
        messaggioRisultato = 'Hai vinto!'
    } else if (risultatoSomma == 'Dispari' && scelta == 'dispari') {
        messaggioRisultato = 'Hai vinto'
    } else {
        messaggioRisultato = "Ha vinto l'IA!"
    }

    return `<h2>L'IA ha scelto il numero ${numeroIA}. La somma del numero scelta dell'IA e dall'utente è ${somma} e il risultato della somma è ${risultatoSomma}. ${messaggioRisultato}</h2>`;

}