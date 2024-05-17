'use strict'

// array con le squadre di calcio
const squadreCalcio = [
    { nome: "Inter", puntiTotali: 0, falliSubiti: 0 },
    { nome: "Milan", puntiTotali: 0, falliSubiti: 0 },
    { nome: "Juve", puntiTotali: 0, falliSubiti: 0 },
    { nome: "Roma", puntiTotali: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiTotali: 0, falliSubiti: 0 },
    { nome: "Atalanta", puntiTotali: 0, falliSubiti: 0 },
    { nome: "Lazio", puntiTotali: 0, falliSubiti: 0 },
    { nome: "Fiorentina", puntiTotali: 0, falliSubiti: 0 },
    { nome: "Verona", puntiTotali: 0, falliSubiti: 0 },
    { nome: "Sassuolo", puntiTotali: 0, falliSubiti: 0 }
  ];
  console.log("Array di squadre di calcio:");
  console.log(squadreCalcio);

  
  // genero i numeri random per le proprietà vuote
squadreCalcio.forEach(squadra => {
    squadra.puntiTotali = Math.floor(Math.random() * 100);
    squadra.falliSubiti = Math.floor(Math.random() * 100);
  });
  