
/*
Jogo de advinha

O usuário tenta adivinhar um número aleatório entre 1 e 10.

Criado por: fernando Sakabe
11985555871
contato: fernandokenjisakabe@gmail.com

*/

let numero = 0;
const numeroSecreto = Math.floor(Math.random()*10)+1;
let tentativas = 3;

while((numero!==numeroSecreto) && (tentativas>0)){

let numero = Number(prompt("Advinhe o numero de 1 a 10:"));
tentativas=tentativas-1;

if(numero=== numeroSecreto){
  alert("O número que você inseriu é o correto ");
  tentativas=0;
    }
else{
  if(numero>numeroSecreto){
    alert("O número que você inseriu é maior que o secreto, você te mmais " +tentativas + " tentativas");

  }
  else{
  alert("O número que você inseriu é menor que o secreto, você temmais" +tentativas + " tentativas");
}
    }
}
