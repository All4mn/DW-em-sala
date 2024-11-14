const numeros = [10,15,20,25,30,35]

//maneiras de fazer funções

//função anônima
const copia = numeros.map(function (elemento){return elemento*10})
// o map "copia" a lista onde ele é aplicado para uma outra, ele pode ou não sofre modificações atravez de funções
console.log(copia)

//função normal
function multiplica10(elemento){return elemento*10}

//função com const
const multiplica2 = function (elemento){return elemento*2}

//arrow function
const multiplica3 = (elemento) => elemento*3 //return

//

//podemos encadear maps
const string = numeros.map(multiplica3).map((elemento)=> `numero ${elemento}`)
console.log(string) 