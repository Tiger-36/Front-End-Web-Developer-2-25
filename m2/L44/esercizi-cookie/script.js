// ========================================
// LEZIONE 44 - ESERCIZIO COOKIE
// ========================================
// In classe avete gia visto il cookie banner.
// Qui lavoriamo su un caso diverso: preferenze + statistiche visita.
// ========================================
// Obiettivi didattici:
// 1) Creare funzioni helper per i cookie
// 2) Salvare e leggere preferenze utente
// 3) Gestire cookie con scadenza fissa a 1 mese
// ========================================

// -----------------------------
// ELEMENTI DOM
// -----------------------------
const nomeInput = document.querySelector("#nomeUtente");
const temaSelect = document.querySelector("#tema");
const salvaBtn = document.querySelector("#salvaBtn");
const messaggio = document.querySelector("#messaggio");
const visiteEl = document.querySelector("#visite");
const ultimaVisitaEl = document.querySelector("#ultimaVisita");


// =============================
// ESERCIZIO 1 - HELPER COOKIE
// =============================
// Implementa queste funzioni:
//
// A) setCookie(nome, valore)
//    - Crea un cookie nel formato "nome=valore; expires=...;"
//    - Scadenza sempre impostata a 1 mese
//
// B) getCookie(nome)
//    - Legge document.cookie
//    - Restituisce il valore del cookie richiesto oppure null se non esiste
//

function setCookie(nome, valore) {
    // TODO
}

function getCookie(nome) {
    // TODO
    return null;
}


// =============================
// ESERCIZIO 2 - CARICAMENTO INIZIALE
// =============================
// All'avvio pagina:
// 1. Leggi cookie "nome" e cookie "tema".
// 2. Se esiste "nome", mostra: "Bentornato, <nome>".
//    Altrimenti: "Nessun dato caricato."
// 3. Se "tema" vale "scuro", aggiungi classe "dark" al body.
// 4. Leggi cookie "visite" (numero):
//    - Se non esiste, parti da 1
//    - Se esiste, incrementa di 1
//    - Salva il nuovo valore in cookie (1 mese)
// 5. Aggiorna il testo "Visite: X"
// 6. Gestisci cookie "ultimaVisita":
//    - Prima di sovrascriverlo, mostra in pagina il valore precedente
//    - Poi salva la data/ora corrente in "ultimaVisita"

function inizializzaPagina() {
    // TODO
}


// =============================
// ESERCIZIO 3 - SALVATAGGIO PREFERENZE
// =============================
// Al click su "Salva preferenze":
// 1. Leggi nome e tema dal form
// 2. Se nome e' vuoto, mostra un messaggio di errore e interrompi
// 3. Salva cookie:
//    - nome (1 mese)
//    - tema (1 mese)
// 4. Aggiorna il messaggio in pagina
// 5. Applica subito il tema scelto (classe dark sul body)

function salvaPreferenze() {
    // TODO
}


// =============================
// EVENTI
// =============================
salvaBtn.addEventListener("click", salvaPreferenze);

inizializzaPagina();


