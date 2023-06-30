/*===============================================================
map() usado para traduzir ou mapear onjetos de arrays
================================================================
*/
const numbers = [ 1, 4, 5, 9, 14, 23]

const doubledNumbers = numbers.map( function( elem ) {
    return elem*2
} )
console.log(doubledNumbers)

/*===============================================================
filter() usado para filtrar
=================================================================
