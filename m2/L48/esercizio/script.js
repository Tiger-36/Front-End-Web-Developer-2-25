// ========================================
// LEZIONE 48 - ESERCIZIO OOP BREVE
// Programmazione ad oggetti in JavaScript
// ========================================
// Obiettivo:
// creare una classe, istanziare oggetti e usare i metodi per modificarne lo stato.
// ========================================

const nomeInput = document.querySelector("#nome");
const saldoInput = document.querySelector("#saldo");
const creaBtn = document.querySelector("#creaBtn");
const depositaBtn = document.querySelector("#depositaBtn");
const prelevaBtn = document.querySelector("#prelevaBtn");
const importoInput = document.querySelector("#importo");
const output = document.querySelector("#output");

let contoCorrente = null;


// =============================
// ESERCIZIO 1 - CLASSE CONTO
// =============================
// Crea una classe ContoBancario.
//
// Proprieta':
// - nome
// - saldo
//
// Metodi:
// - deposita(importo)
//   Aggiunge importo al saldo.
//
// - preleva(importo)
//   Se il saldo e' sufficiente, sottrae importo dal saldo.
//   Altrimenti non modifica il saldo.
//
// - descrizione()
//   Restituisce una stringa nel formato:
//   "Conto di Mario - Saldo: 120 euro"

class ContoBancario {
    constructor(nome, saldo) {
        // TODO
    }

    deposita(importo) {
        // TODO
    }

    preleva(importo) {
        // TODO
    }

    descrizione() {
        // TODO
        return "";
    }
}


// =============================
// ESERCIZIO 2 - CREARE UN OGGETTO
// =============================
// Completa la funzione creaConto().
//
// 1. Leggi nome e saldo dagli input.
// 2. Crea un nuovo oggetto ContoBancario.
// 3. Salvalo nella variabile contoCorrente.
// 4. Mostra la descrizione in pagina.

function creaConto() {
    // TODO
}


// =============================
// ESERCIZIO 3 - USARE I METODI
// =============================
// Completa depositaDenaro() e prelevaDenaro().
//
// Requisiti:
// 1. Leggi importoInput.
// 2. Chiama il metodo corretto sull'oggetto contoCorrente.
// 3. Aggiorna il testo in pagina con descrizione().

function depositaDenaro() {
    // TODO
}

function prelevaDenaro() {
    // TODO
}


// =============================
// EVENTI
// =============================
creaBtn.addEventListener("click", creaConto);
depositaBtn.addEventListener("click", depositaDenaro);
prelevaBtn.addEventListener("click", prelevaDenaro);
