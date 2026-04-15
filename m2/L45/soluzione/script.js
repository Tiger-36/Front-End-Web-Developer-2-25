// ========================================
// LEZIONE 44 - ESERCIZIO COOKIE - SOLUZIONE
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

function setCookie(key, value) {
    const date = new Date(); // creo un oggetto data
    date.setMonth(date.getMonth() + 1); // aggiungo un mese

    const expires = `expires=${date.toUTCString()}`;

    // scrivo il cookie
    document.cookie = `${key}=${value}; ${expires}`;
}

function getCookie(key) {
    const cookies = document.cookie.split('; '); // recupero tutti i cookie e li divido, ottenendo un array di coppie (string)

    const cookie = cookies.find(c => c.startsWith(key));

    // Find restituisce Null se Il Cookie non viene trovato
    // Quindi con l'operatore ternario sottostante, io verifico e. Se il cookie non viene trovato allora restituisco null 
    // Altrimenti taglio il cookie in corrispondenza del simbolo uguale e prelievo solo quello che c'è dopo l'uguale, ossia il valore.
    return cookie ? cookie.split('=')[1] : null;
}


// =============================
// ESERCIZIO 2 - CARICAMENTO INIZIALE
// =============================

function inizializzaPagina() {
    // 1. Leggi cookie "nome" e "tema"
    const nomeUtenteSalvato = getCookie("nome");
    const temaSalvato = getCookie("tema");
    
    // 2. Se "nome" esiste, mostra messaggio "Bentornato", altrimenti "Nessun dato caricato"
    if (nomeUtenteSalvato) {
        messaggio.textContent = "Bentornato, " + nomeUtenteSalvato + "!";
        nomeInput.value = nomeUtenteSalvato;
    } else {
        messaggio.textContent = "Nessun dato caricato.";
    }
    
    // 3. Se tema è "scuro", aggiungi classe "dark" al body
    if (temaSalvato === "scuro") {
        document.body.classList.add("dark");
        temaSelect.value = "scuro";
    } else {
        temaSelect.value = "chiaro";
    }
    
    // 4. Gestisci cookie "visite"
    let visite = getCookie("visite");
    if (visite === null) {
        visite = 1;
    } else {
        visite = parseInt(visite) + 1;
    }
    setCookie("visite", visite);
    
    // 5. Aggiorna il testo "Visite: X"
    visiteEl.textContent = "Visite: " + visite;
    
    // 6. Gestisci cookie "ultimaVisita"
    const ultimaVisitaSalvata = getCookie("ultimaVisita");
    if (ultimaVisitaSalvata) {
        ultimaVisitaEl.textContent = "Ultima visita: " + ultimaVisitaSalvata;
    } else {
        ultimaVisitaEl.textContent = "Ultima visita: -";
    }
    // Salva la data/ora corrente
    const oraCorrente = new Date().toLocaleString('it-IT');
    setCookie("ultimaVisita", oraCorrente);
}


// =============================
// ESERCIZIO 3 - SALVATAGGIO PREFERENZE
// =============================

function salvaPreferenze() {
    const nome = nomeInput.value.trim();
    const tema = temaSelect.value;
    
    // 2. Valida che il nome non sia vuoto
    if (nome === "") {
        messaggio.textContent = "Errore: Inserisci un nome valido!";
        return;
    }
    
    // 3. Salva i cookie
    setCookie("nome", nome);
    setCookie("tema", tema);
    
    // 4. Aggiorna il messaggio
    messaggio.textContent = "Preferenze salvate! Bentornato, " + nome + "!";
    
    // 5. Applica il tema scelto
    if (tema === "scuro") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}


// =============================
// EVENTI
// =============================
salvaBtn.addEventListener("click", salvaPreferenze);

inizializzaPagina();


