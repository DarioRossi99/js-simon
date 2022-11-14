
const numeriUtente = [];
const numeriTrovati = [];
const numeriRandom = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
console.log(numeriRandom);

let text = (numeriRandom);
let soluzione = (numeriUtente);

// while (numeriRandom.length < 5) {
//     const input = prompt("Numeri da indovinare");
//     numeriUtente.push ( input );
// }

console.log( numeriUtente )

document.getElementById("text").innerHTML = text;

setTimeout(function() {

    const textEl = document.getElementById("text");

    textEl.classList.add ("d-none");
    

}, 7000);

setTimeout(function(){

    while (numeriUtente.length < 5) {
        const input = prompt("Numeri da indovinare");
        numeriUtente.push ( input );
    }

    const textEl = document.getElementById("text");

    textEl.classList.remove ("d-none");

    const soluzioneEl = document.getElementById("soluzione")
    
    document.getElementById("soluzione").innerHTML = soluzione;

}, 7500)