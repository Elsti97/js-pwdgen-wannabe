let NomeUtente = prompt("Inserisci il tuo nome")
console.log(NomeUtente);

let CognomeUtente = prompt("Inserisci il tuo cognome")
console.log(CognomeUtente);

let ColorePreferito = prompt("Inserisci il tuo colore preferito")
console.log(ColorePreferito);

const  NumeroFisso = 21;

document.getElementById('BestPassword').innerHTML = `
${NomeUtente}${CognomeUtente}${ColorePreferito}${NumeroFisso}`;