let rank = quantity(200, 40);
let nivel = 0;

function quantity(win, lose){
  let ranked = win - lose;
  return ranked;
  
}

if(rank < 10){
  nivel = "Ferro"; 
}else if(rank <= 20){ 
  nivel = "Bronze";
}else if(rank <= 50){
  nivel = "Prata";
}else if(rank <= 80){
  nivel = "Ouro";
}else if(rank <= 90){
  nivel = "Diamante";  
}else if(rank <= 100){
  nivel = "Lendário";
}else{
  nivel = "Imortal";
}
console.log(`O Herói tem de saldo de ${rank} está no nível de ${nivel}"`)