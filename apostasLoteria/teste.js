    /*
    Capturar números
    */

    //pegando elementos da página
    let rangeNum = document.getElementById(`rangeNum`);
    let quantNum = document.getElementById(`quantNum`);
    let quantSort = document.getElementById(`quantSort`);
    let butSort = document.getElementById(`butSort`);

    //verificando números nos campos

    /*
    let checkNumb = function(){
        console.log(rangeNum.value);
        console.log(quantNum.value);
        console.log(quantSort.value);
    }
    butSort.onclick = checkNumb;
*/

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
    let colNum = []
    let seqArrTest = function(){
        for(let i = 1; i <= quantNum.value; i++){
        sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
        console.log(sortNum);
        colNum.push(sortNum);
    }
        console.log(colNum);
    }
    butSort.onclick = seqArrTest;
    */

    //Organizar de forma crescente

    /*
    let colNum = []
    let seqArrTest = function(){
        for(let i = 1; i <= quantNum.value; i++){
        sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
        console.log(sortNum);
        colNum.push(sortNum);
    }
        console.log(colNum);
        colNum.sort(function(a,b){
            return a-b;
        });
        console.log(colNum);
    }
    butSort.onclick = seqArrTest;
    */

    //Comparar números gerados para evitar repetições

    /*
    let colNum = []
    let seqArrTest = function(){
        for(let i = 1; i <= quantNum.value; i++){
        let sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
        while(colNum.includes(sortNum)){
            sortNum = Math.floor(Math.random() * rangeNum.value) +1;
        }
        colNum.push(sortNum); 
        console.log(sortNum);  
    }
        console.log(colNum);
        colNum.sort(function(a,b){
            return a-b;
        });
        console.log(colNum);
    }
    butSort.onclick = seqArrTest;
    */


    //Cria segurança de não ter mais número do que o array suporta

    /*
    let ArrayNumb = [];
    let seqArrTest = function(){
        if(Number(quantNum.value) > Number(rangeNum.value)){
            alert(`você informou mais números do que é possível jogar`)
        }else{    
            for(let i = 1; i <= quantNum.value; i++){
            let sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
            while(ArrayNumb.includes(sortNum)){
                sortNum = Math.floor(Math.random() * rangeNum.value) +1;
            }
            ArrayNumb.push(sortNum); 
            console.log(sortNum);  
            }
        }
        console.log(ArrayNumb);
        ArrayNumb.sort(function(a,b){
            return a-b;
        });
        console.log(ArrayNumb);
        
    }
    butSort.onclick = seqArrTest;
    let teste = []
    for(let x = 0; x < 10; x++){
        teste[x] = [3];
        console.log(teste);
    }
     */

    //Gerar mais que uma sequência 

    /*
    let arrayNumb = []; //array que vai sortear
    let arrResult = []; //array que receber todos os valores
    let seqArrTest = function(){ //sorteio
        if(Number(quantNum.value) > Number(rangeNum.value)){
            alert(`você informou mais números do que é possível jogar`)
        }else{    
            for(j = 1; j <= Number(quantSort.value); j++){//linhas
                for(let i = 1; i <= Number(quantNum.value); i++){//colunas com valores
                    let sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
                    while(arrayNumb.includes(sortNum)){// garantir que não tenha nada repetido na linha
                        sortNum = Math.floor(Math.random() * rangeNum.value) +1;
                    }
                    arrayNumb.push(sortNum);//adicionado valores no array  de sorteio
                    }
                arrayNumb.sort(function(a,b){//organizado valores no array de sorteio
                    return a-b;
                });
                console.log(arrayNumb); //mostrando array sorteado
                arrResult[j]= arrayNumb.slice(); //copiando para array que recebe
                while(arrayNumb.length){ //limpando array sorteado
                    arrayNumb.pop();
                }
            }
            console.log(arrResult);//mostrando array sorteado
        }
    }
    butSort.onclick = seqArrTest;//botão de ação
    */

    //evitar repetição de sequência

    let arrayNumb = []; //array que vai sortear
    let arrResult = []; //array que receber todos os valores
    let seqArrTest = function(){ //sorteio
        if(Number(quantNum.value) > Number(rangeNum.value)){
            alert(`você informou mais números do que é possível jogar`)
        }else{    
            for(j = 1; j <= Number(quantSort.value); j++){//linhas
                for(let i = 1; i <= Number(quantNum.value); i++){//colunas com valores
                    let sortNum = Math.floor(Math.random() * rangeNum.value) +1; //posto +1 pois não a zero nas apostas
                    while(arrayNumb.includes(sortNum)){// garantir que não tenha nada repetido na linha
                        sortNum = Math.floor(Math.random() * rangeNum.value) +1;
                    }
                    arrayNumb.push(sortNum);//adicionado valores no array  de sorteio
                    }
                arrayNumb.sort(function(a,b){//organizado valores no array de sorteio
                    return a-b;
                });
                console.log(arrayNumb); //mostrando array sorteado
                arrResult[j]= arrayNumb.slice(); //copiando para array que recebe
                while(arrayNumb.length){ //limpando array sorteado
                    arrayNumb.pop();
                }
            }
            console.log(arrResult);//mostrando array sorteado
        }
    }
    butSort.onclick = seqArrTest;//botão de ação