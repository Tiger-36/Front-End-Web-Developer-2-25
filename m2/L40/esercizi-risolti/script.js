
// ==================
// ESERCIZIO 1: getElementById - SELEZIONARE PER ID
// ==================
// Seleziona l'elemento con id "paragrafo-principale"
// Stampa in console l'elemento selezionato
// Stampa in console il suo testo con la proprietà innerText

const paragrafoPrincipale = document.getElementById('paragrafo-principale');
console.log(paragrafoPrincipale);
console.log(paragrafoPrincipale.innerText);


// ==================
// ESERCIZIO 2: querySelector - SELEZIONARE CON SELETTORE CSS
// ==================
// Usa querySelector per selezionare il primo elemento con classe "nota"
// Stampa in console l'elemento selezionato
// Usa querySelector per selezionare l'elemento con id "campo-nome"
// Stampa in console il suo attributo type

const primaNota = document.querySelector('.nota');
console.log(primaNota);
const campoNome = document.querySelector('#campo-nome');
console.log(campoNome.type);
 

// ==================
// ESERCIZIO 3: querySelectorAll - SELEZIONARE PIÙ ELEMENTI
// ==================
// Usa querySelectorAll per selezionare tutti gli elementi con classe "nota"
// Stampa in console la NodeList ottenuta e il suo numero di elementi
// Usa forEach sulla NodeList per stampare in console il testo di ogni nota
const note = document.querySelectorAll('.nota');
console.log(note, note.length);

note.forEach(n => console.log(n.innerText));


// ==================
// ESERCIZIO 4: getElementsByClassName - SELEZIONARE PER CLASSE
// ==================
// Usa getElementsByClassName per selezionare tutti gli elementi con classe "nota"
// Stampa in console la HTMLCollection ottenuta
// Poi stampa solo il primo elemento della collezione

const noteCollection = document.getElementsByClassName('nota');
console.log(noteCollection);
console.log(noteCollection[0]);

// ==================
// ESERCIZIO 5 (innerText) - MODIFICARE IL TESTO
// ==================
// Seleziona l'elemento con id "testo-dinamico"
// Cambia il suo testo in "Testo modificato con innerText!"
// Stampa in console il nuovo valore di innerText

const testoDinamico = document.getElementById('testo-dinamico');
testoDinamico.innerText = "Testo modificato con innerText!";//scrittura
console.log(testoDinamico.innerText);//lettura


// ==================
// ESERCIZIO 6 (innerHTML) - INSERIRE HTML DINAMICO
// ==================
// Seleziona l'elemento con id "box-html"
// Sostituisci il suo contenuto con:
//   <strong>Testo in grassetto</strong> e <em>testo in corsivo</em>
// Stampa in console il nuovo contenuto
const boxHtml = document.getElementById('box-html');

boxHtml.innerHTML = "<strong>Testo in grassetto</strong> e <em>testo in corsivo</em>";
console.log(boxHtml.innerHTML);


// ==================
// ESERCIZIO 7 (style) - MODIFICARE LO STILE INLINE
// ==================
// Seleziona l'elemento con id "testo-stile"
// Applica questi stili direttamente via JavaScript (proprietà .style):
//   - colore testo: "blue"
//   - dimensione font: "20px"
//   - sfondo: "lightyellow"
// Stampa in console il valore di style.color dopo la modifica

const testoStile = document.getElementById('testo-stile');

// testoStile.style.color = "blue";
// testoStile.style.fontSize = "20px";
// testoStile.style.backgroundColor = "lightyellow";

const nuoviStili = {
    color: "blue",
    fontSize: "20px",
    backgroundColor: "lightyellow"
};

aggiungiStile(nuoviStili, "#testo-stile");

function aggiungiStile(oggettoStile, selettore){
    const el = document.querySelector(selettore);
    
    if(!el) return;

    for(let prop in oggettoStile){
        el.style[prop] = oggettoStile[prop];
    }
}


// ==================
// ESERCIZIO 8 (classList.add / classList.remove) - AGGIUNGERE E RIMUOVERE CLASSI
// ==================
// Seleziona l'elemento con id "box-classi"
// Aggiungi la classe "evidenziato" con classList.add
// Stampa in console il className dell'elemento dopo l'aggiunta
// Poi rimuovi la classe "evidenziato" con classList.remove
// Stampa in console il className dopo la rimozione

// function $(selettore, multiple = false){
//     if(!multiple){
//         return document.querySelector(selettore);
//     }else{
//         return document.querySelectorAll(selettore);
//     }
// }

const boxClassi = document.getElementById("box-classi");

boxClassi.classList.add("evidenziato");
boxClassi.classList.remove("evidenziato");
console.log(boxClassi.className);



// ==================
// ESERCIZIO 9 (className) - SOSTITUIRE TUTTE LE CLASSI
// ==================
// Seleziona l'elemento con id "testo-classnome"
// Stampa in console il suo className attuale
// Assegna alla proprietà className il valore "rosso grande"
//   (sostituisce completamente le classi precedenti)
// Stampa in console il nuovo className
const testoClassnome = document.getElementById('testo-classnome');

console.log(testoClassnome.className);
testoClassnome.className = "rosso grande"
console.log(testoClassnome.className);


// ==================
// ESERCIZIO 10 (addEventListener - click) - BOTTONE CHE SALUTA
// ==================
// Seleziona il bottone con id "btn-saluta"
// Aggiungi un addEventListener per l'evento "click"
// Quando l'utente clicca, cambia l'innerText del bottone in "Ciao! 👋"
const btnSaluta = document.getElementById("btn-saluta");

btnSaluta.addEventListener('click',function(){
    this.innerText = "Ciao! 👋";
});

// ==================
// ESERCIZIO 11 (addEventListener - click) - CONTATORE DI CLIC
// ==================
// Seleziona il bottone con id "btn-contatore"
// e il paragrafo con id "risultato-contatore"
// Crea una variabile "contatore" inizializzata a 0 fuori dal listener
// Aggiungi un addEventListener "click" al bottone:
//   - incrementa "contatore" di 1
//   - aggiorna l'innerText del paragrafo nel formato "Clic: X"

const btnContatore = document.getElementById('btn-contatore');
const risultatoContatore = document.getElementById('risultato-contatore');
let contatore = 0;

btnContatore.addEventListener('click',function(){
    contatore++;
    risultatoContatore.innerText = `Click: ${contatore}`;
})

btnContatore.addEventListener('click',function(){
    contatore++;
    risultatoContatore.innerText = `Click: ${contatore}`;
})


// ==================
// ESERCIZIO 12 (addEventListener - mouseover) - RILEVARE IL PASSAGGIO DEL MOUSE
// ==================
// Seleziona il div con id "box-hover"
// e il paragrafo con id "stato-hover"
// Aggiungi un addEventListener "mouseover" al div:
//   - cambia il colore di sfondo del div in "lightblue"
//   - aggiorna l'innerText del paragrafo in "Stato: sopra"
// Aggiungi un addEventListener "mouseout" al div:
//   - ripristina il colore di sfondo del div a "#ddd"
//   - aggiorna l'innerText del paragrafo in "Stato: fuori"
// Non usare l'oggetto event nei callback

const boxHover = document.getElementById('box-hover');
const statoHover = document.getElementById('stato-hover');

boxHover.addEventListener('mouseover',function(){
    this.style.backgroundColor = "lightblue";
    statoHover.innerText = "Stato: sopra";
});

boxHover.addEventListener('mouseout',function(){
    this.style.backgroundColor = "#ddd";
    statoHover.innerText = "Stato: fuori";
});