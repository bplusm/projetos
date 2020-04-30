let primeiroArr = [[1,2,3,4],[5,6]];
let segundoArr = [[1,3,5,7],[5,6]];

for(i =0; i<primeiroArr.length; i++){
    for(j=0; j<primeiroArr.length; j++)
    console.log(primeiroArr[i][j]);
    if(segundoArr.includes(primeiroArr[i][j])){
        console.log(primeiroArr[i][j]);
    }
}
/*
console.log(primeiroArr[0][0])
console.log(primeiroArr[0][1])
console.log(primeiroArr[0][2])
console.log(primeiroArr[0][3])
console.log(primeiroArr[1][0])
console.log(primeiroArr[1][1])

//colocar para adicionar tudo em um terceiro array se o array tiver o tamanho de quantNumb excluir?
*/