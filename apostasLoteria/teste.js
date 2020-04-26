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

/*
let randSeq = function(){
       for(let i = 1; i <= quantNum.value; i++){
       sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
       console.log(sortNum);
    }
}
butSort.onclick = randSeq;
/*

//Inserir sequencia em um Array

/*
let seqArr = []
let seqArrTest = function(){
    for(let i = 1; i <= quantNum.value; i++){
    sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
    console.log(sortNum);
    seqArr.push(sortNum);
 }
    console.log(seqArr);
}
butSort.onclick = seqArrTest;
*/

//Organizar de forma crescente

/*
let seqArr = []
let seqArrTest = function(){
    for(let i = 1; i <= quantNum.value; i++){
    sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
    console.log(sortNum);
    seqArr.push(sortNum);
 }
    console.log(seqArr);
    seqArr.sort(function(a,b){
        return a-b;
    });
    console.log(seqArr);
}
butSort.onclick = seqArrTest;
*/

//Comparar números gerados para evitar repetições

/*
let seqArr = []
let seqArrTest = function(){
    for(let i = 1; i <= quantNum.value; i++){
    let sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
    while(seqArr.includes(sortNum)){
        sortNum = Math.floor(Math.random() * rangeNum.value) +1;
    }
    seqArr.push(sortNum); 
    console.log(sortNum);  
 }
    console.log(seqArr);
    seqArr.sort(function(a,b){
        return a-b;
    });
    console.log(seqArr);
}
butSort.onclick = seqArrTest;
*/


//Cria segurança de não ter mais número do que o array suporta

/*
let seqArr = []
let seqArrTest = function(){
    if(quantNum.value > rangeNum.value){
        alert(`você informou mais números do que é possível jogar`)
    }else{    
        for(let i = 1; i <= quantNum.value; i++){
        let sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
        while(seqArr.includes(sortNum)){
            sortNum = Math.floor(Math.random() * rangeNum.value) +1;
        }
        seqArr.push(sortNum); 
        console.log(sortNum);  
        }
    }
    console.log(seqArr);
    seqArr.sort(function(a,b){
        return a-b;
    });
    console.log(seqArr);
}
butSort.onclick = seqArrTest;
*/

//Gerar mais que uma sequência 
let seqArr = []
let seqArrTest = function(){
    if(quantNum.value > rangeNum.value){
        alert(`você informou mais números do que é possível jogar`)
    }else{    
        for(let i = 1; i <= quantNum.value; i++){
        let sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
        while(seqArr.includes(sortNum)){
            sortNum = Math.floor(Math.random() * rangeNum.value) +1;
        }
        seqArr.push(sortNum); 
        console.log(sortNum);  
        }
    }
    console.log(seqArr);
    seqArr.sort(function(a,b){
        return a-b;
    });
    console.log(seqArr);
}
butSort.onclick = seqArrTest;
