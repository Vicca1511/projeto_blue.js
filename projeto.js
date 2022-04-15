console.clear();
let prompt = require('prompt-sync')();

console.log("Todos os dias na rotina das familias são corridos e cheios de necessidades, porém para as crianças que não tem um conhecimento mais aprofundado e nem um senso de responsabilidade construido , é necessário um acompanhamento de um adulto responsável, e você precisa ser um otimo pai/mãe para dar o exemplo enquanto ajuda o(a) 'pequeno(a)' a cumprir com todos os requesitos pra iniciar seu dia.  ");
console.log()
console.log("Agora responda com cautela com 'sim' ou 'não' se você cumpriu com todas as tarefas , e foi um pai/mãe EXEMPLAR.")
console.log()
console.log("Vocês tomaram banho?");
let banho = prompt("RESPONDA :").toUpperCase();
console.log("Vocês colocaram seus trajes? ");
let traje = prompt("RESPONDA :").toUpperCase();
console.log("Vocês pentearam os cabelos? ");
let cabelo = prompt("RESPONDA :").toUpperCase();
console.log("Vocês se alimentaram bem ? ");
let alimento = prompt("RESPONDA :").toUpperCase();
console.log("Vocês escovaram os dentes? ");
let dentes = prompt("RESPONDA :").toUpperCase();
console.log()


if(banho == "SIM" ){
    banho = 1;
}else {banho = 0
}
  
if (cabelo ==  "SIM" ){
    cabelo = 1;
}else{
    cabelo = 0
}
if (traje == "SIM" ){
    traje = 1;
}else{
    traje = 0
}
    
if (alimento == "SIM" ){
        alimento = 1;
}else{
    alimento = 0
}   
if (dentes == "SIM" ){
    dentes = 1;
}else{
    dentes = 0
}   

total_de_respostas = [ banho, cabelo , traje, alimento, dentes];
soma_respostas = (banho + cabelo + traje + alimento + dentes)
console.log(`O total de respostas SIM foi:  ${soma_respostas}.`);
console.log(`O total de respostas NAO foi:  ${5 - soma_respostas }.`)
console.log()

if(soma_respostas <= 0) {
    console.log("Estamos *extremamente* desapontados com os maus tratos que você tem com seu próprio filho , você não nos representa e Falhou TERRIVELMENTE nas tarefas!")
    
}else if(soma_respostas > 0 && soma_respostas<= 2 ) {
    console.log("Você está mesmo se esforçando para cuidar do seu filho ? Você precisa se empenhar mais nas tarefas!")
    
}else if(soma_respostas == 3) {
    console.log("Sabemos que a paternidade/maternidade não é nada simples, porém sabemos que você tem mais para doar . Se esforce ao máximo !")
    
}else if(soma_respostas == 4) {
    console.log("Parabéns, você é um excelente pai/mãe e é muito bom ver como você se empenhou, mas podemos fazer um trabalho melhor ainda , né ?!")
    
}else if(soma_respostas == 5) {
    console.log("Parabéns, você realizou todas as tarefas de forma maravilhosa , o Mundo se orgulha com seus cuidados com a tua criança . Elas são nosso futuro e está em ótimas mãos !")
    
}
console.log()
