//pegando elementos da página
let rangeNum = document.getElementById(`rangeNum`);
let quantNum = document.getElementById(`quantNum`);
let quantSort = document.getElementById(`quantSort`);
let butSort = document.getElementById(`butSort`);
//verificando números nos campos
let checkNumb = function (){
    console.log(rangeNum.value);
    console.log(quantNum.value);
    console.log(quantSort.value);
}
butSort.onclick = checkNumb;