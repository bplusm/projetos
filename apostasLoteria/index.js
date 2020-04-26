/*
Capturar números
*/
//pegando elementos da página
let rangeNum = document.getElementById(`rangeNum`);
let quantNum = document.getElementById(`quantNum`);
let quantSort = document.getElementById(`quantSort`);
let butSort = document.getElementById(`butSort`);
//verificando números nos campos
let checkNumb = function(){
    console.log(rangeNum.value);
    console.log(quantNum.value);
    console.log(quantSort.value);
}
butSort.onclick = checkNumb;
/*
Sortear
*/
//Gerar sequências aleatórias do tamanho determinado
let randSeq = function(){
       for(let i = 1; i <= quantNum.value; i++){
       sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
       console.log(sortNum);
    }
}
butSort.onclick = randSeq;
