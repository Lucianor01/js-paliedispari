/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const container = document.querySelector('#container')

const inputText = document.querySelector('#input_text')

const button = document.querySelector('button')

const div = document.createElement('div')

container.append(div)

button.addEventListener('click', function () {

    const controllo = palindroma((inputText.value));
    div.innerHTML = controllo
    /* inputText = document.querySelector('#input_text').value */
    inputText.value = '';
})

function palindroma(parola) {

    const reverse = parola.split('').reverse().join('');

    for (let i = 0; i < reverse.length; i++) {

        if (inputText.value[i].toUpperCase() === reverse[i].toUpperCase()) {
            return `<h3>${inputText.value} è palindroma</h3>`
        } else {
            return `<h3>${inputText.value} non è palindroma</h3>`
        }
    }
}


