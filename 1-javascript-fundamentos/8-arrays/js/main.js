const numeros = [10, 5, 3, 3, 2, 9]
const pessoas = [
  {
    nome: 'Christie C. Craighead',
    idade: 15
  },
  {
    nome: 'Arlene T. Baker',
    idade: 14
  },
  {
    nome: 'Christie C. Craighead',
    idade: 18
  },
  {
    nome: 'Scott K. Parham',
    idade: 23
  },
  {
    nome: 'Christie C. Craighead',
    idade: 30
  },
  {
    nome: 'Jeremiah J. Lobel',
    idade: 8
  },
  {
    nome: 'Deborah W. Coulter',
    idade: 21
  },
]
const salas = ['A', 'B', 'C', 'D', 'E']

// map

const alunosSalas = pessoas.map(pessoa => {
  return {
    ...pessoa,
    sala: salas[Math.floor(Math.random()*salas.length)]
  }
})
//console.log(alunosSalas);

// filter =filtro
const alunosMaioresDeIdade = pessoas.filter(pessoa => {
  return pessoa.idade >= 18
})
//console.log(alunosMaioresDeIdade);
const alunosC = pessoas.filter(pessoa => {
  return pessoa.nome[0]  =='C'
})
//console.log(alunosC);
//rejects

// reduce
const valorInicial = 0
const somaDosNumeros = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual
}, valorInicial)
//console.log(somaDosNumeros);

cosnt debora = pessoas.find(pessoa => {
  return pessoa.idade === 15
  })
  console.log(debora)
