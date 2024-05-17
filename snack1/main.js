'use strict'

// creo un array con i nomi delle bici
const biciDaCorsa = [
      { nome: 'Bianchi', peso: 8 },
      { nome: 'Trek', peso: 7 }, 
      { nome: 'Cannondale', peso: 6 }, 
      { nome: 'Specialized', peso: 9 } 
    ];

// stampo in console l'array
console.log("Array di bici da corsa:"); console.log(biciDaCorsa);


let biciLeggera = biciDaCorsa[0];

// ciclo per trovare una bici più leggera 
for (let i = 1; i < biciDaCorsa.length; i++)
     { if (biciDaCorsa[i].peso < biciLeggera.peso) 
     { biciLeggera = biciDaCorsa[i]; } 
     }

const { nome, peso } = biciLeggera;

// stampo in console la bici più leggera
const output = `La bici da corsa più leggera è la ${nome} con un peso di ${peso} kg.`;
console.log(output);


