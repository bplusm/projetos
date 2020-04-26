let rangeNum = document.getElementById(`rangeNum`);
let rangeNumArr = [];
let quantNum = document.getElementById(`quantNum`);
let quantSort = document.getElementById(`quantSort`);
let clickButSort = function (){
    //pegando o total de números 
    for (i=1; i<=Number(rangeNum.value); i++){
        rangeNumArr.push(i);
    }
    let randomNums = rangeNumArr[Math.floor(Math.random()*quantNum.value)];
    console.log(randomNums);
    //"debug"
    console.log("clicou");
}
let butSort = document.getElementById(`butSort`);
butSort.onclick = clickButSort;