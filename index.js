

let heroi = "Paulo";
let xp = 10400;
let nivel = "";

if (xp < 1000){
    nivel = "ferro";
} else if (xp <= 2000){
    nivel = "Bronze";
} else if (xp <= 5000){
    nivel = "Prata";
} else if (xp <= 7000){
    nivel = "Ouro";
} else if (xp <= 8000){
    nivel = "Platina";
} else if (xp <= 9000){
    nivel = "Ascendente"
} else if (xp <= 10000){
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("O herói de nome "+heroi+" está no nível "+nivel );


// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

console.log("-----------------------------");


let qtdVitoria = "125";
let qtdDerrota = "15";

function calcularVitoria(qtdVitoria, qtdDerrota) {
  return qtdVitoria - qtdDerrota;
}

let saldo = calcularVitoria(qtdVitoria, qtdDerrota);

function nivelRank(saldo){
  if (saldo < 10) return "Ferro";
  if (saldo <= 20) return "Bronze";
  if (saldo <= 50) return "Prata";
  if (saldo <= 80) return "Ouro";
  return "Diamante"
}
let rankluta = nivelRank (saldo);

console.log("O Herói tem de saldo de "+saldo+ " está no rank de luta "+rankluta);




// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal


