const array = [1, 2, 3]
array.push(4);
//array.push adiciona um elemento à ultima posição da array
console.log(array)
//--------------------------------------------------------------------
array.pop();
//array.pop remove o ultimo elemento da array
console.log(array)
//-------------------------------------------------------------------
array.shift()
//remove o primeiro elemento da array
console.log(array)
//-------------------------------------------------------------------
array.unshift(0,1)
//adiciona um ou mais elementos no início da array
console.log(array)
//------------------------------------------------------------------
const array1 = [1, 2]
const array2 = [3, 4]
const arrays = array1.concat(array2)
//concatena duas ou mais arrays
console.log(arrays)
//------------------------------------------------------------------
const newvar = [1, 2, 3, 4, 5];
const newvar1 = array.slice(1, 4);//Cópia superficial (shallow copy) de uma parte do array em um novo array.
console.log(newvar1)
//-------------------------------------------------------------------
const arraySplice = newvar1.splice(1,4);
//altera array, removendo, substituindo ou adicionando elementos.
console.log(arraySplice)
//-------------------------------------------------------------------
const arrayf = [1, 2, 3];
//Executa uma função em cada elemento do array.
arrayf.forEach(element => {console.log(element)});
//--------------------------------------------------------------------
const arraym = [1, 2, 3]
// Cria nova array com o resultado de uma função em cada elemento da array.
const newarraym = arraym.map(element => element * 2)
console.log(newarraym)
//----------------------------------------------------------------------
