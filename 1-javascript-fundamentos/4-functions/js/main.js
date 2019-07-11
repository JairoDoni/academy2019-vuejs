/*
  soma
  subtrai
  multiplica
  divide
  full-name
*/

function minhaFuncao(name) {
  return `Olá, ${name}`
}

let x= 10, y= 5 
function Somar() {
  return `Resultado = ${x+y}`
}
function Subtrair() {
  return `Resultado = ${x-y}`
}
function Multiplicar() {
  return `Resultado = ${x*y}`
}
function Dividir() {
  return `Resultado = ${x/y}`
}
console.log(Somar(x+y))
console.log(Subtrair(x-y))
console.log(Multiplicar(x*y))
console.log(Dividir(x/y))

// const minhaFuncao = function (name) {
//   return `Olá, ${name}`
// }
//  const minhaFuncao = name => `Olá, ${name}`

console.log(minhaFuncao('Breno'))