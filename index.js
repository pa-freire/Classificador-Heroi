

let heroi = "Paulo";
let xp = 10400;
let nivel = "";

if (xp < 1000){
    nivel = "ferro";
}
if (xp > 1000 & xp <= 2000){
    nivel = "Bronze";
}
if (xp > 2000 & xp <= 5000){
    nivel = "Prata";
}
if (xp > 5000 & xp <= 7000){
    nivel = "Ouro";
}
if (xp > 7000 & xp <= 8000){
    nivel = "Platina";
}
if (xp > 8000 & xp <= 9000){
    nivel = "Ascendente"
}
if (xp > 9000 & xp <= 1000){
    nivel = "Imortal"
}
if (xp >= 10000 ){
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