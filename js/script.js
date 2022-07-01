/*
#Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: 
non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, 
e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati (delle bombe) - 
abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di 
numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato 
su una cella che non era una bomba.

# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.

# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti

# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, 
controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa 
(raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e 
dobbiamo incrementare il punteggio.

# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)

# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o 
se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto 
ed il messaggio adeguato in caso di vittoria o sconfitta.

#BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

//* Genero una funzione per contare i punti
let points = 0;

const sumOnClick = () => {
    points += 1
}

//* Genero la  funzione play
const play = () => {
    // Svuoto la griglia
    square.innerHTML = '';
    pointBlackboard.classList.remove('d-none');

    // Gestisco la select
    const option = document.getElementById('select').value;
    let rows = 10;
    let columns = 10;

    if(option === 'medium') {
        rows = 9;
        columns = 9;
    } else if(option === 'hard') {
        rows = 7;
        columns = 7;
    }

    const totalCells = (rows * columns)

    // Creo le mie celle
    const createCells = (cellNumber) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = cellNumber;

        cell.style.height = `calc(100% / ${rows})`;
        cell.style.width = `calc(100% / ${columns})`;

        return cell
    }
    
    // Inserisco le celle nella griglia
    for(i = 1; i <= (totalCells); i++) {
        const cell = createCells(i);

        // Al click la cella cambia colore e il suo valore viene letto in console
        cell.addEventListener('click', function(){
            if(this.classList.contains('clicked')) return
            this.classList.add('clicked');
            console.log(this.innerText);
            sumOnClick();
            pointBlackboard.innerText = points;
        })
        square.append(cell)
    }
} 

// Variabili di partenza

const square = document.getElementById('square');
const btnShow = document.getElementById('show');
const select = document.getElementById('option');
const pointBlackboard = document.getElementById('point-counter');


// Premendo il bottone faccio girare il programma
btnShow.addEventListener('click', play);

