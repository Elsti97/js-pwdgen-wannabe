let NomeUtente = prompt("Inserisci nome")
console.log(NomeUtente)

let CognomeUtente = prompt("Inserisci cognome")
console.log(CognomeUtente)

let ColorePreferito = prompt("Inserisci il tuo colore preferito")
console.log(ColorePreferito)

const  NumeroFisso = 21;

document.getElementById('BestPassword').innerHTML = `
${NomeUtente}${CognomeUtente}${ColorePreferito}${NumeroFisso}`