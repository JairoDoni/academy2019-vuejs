const objeto = {
  nome: 'Margaret J. Shah',
  idade: 23,
  soma: function (a, b) {
    return a + b
  },
  nomeInteiro (nome, sobrenome) {
    return `${nome} ${sobrenome}`
  },
  usuario: {
    nome: 'Diane M. Bankston',
    telefone: '843-469-9199',
  }
}

Object.freeze(objeto)
Object.freeze(objeto.usuario)
objeto.usuario.nome = "Breno"
console.log(objeto.usuario)
//delete objeto.teste

 objeto.freeze(objeto.tenis)
 objeto.tenis.cor="azul"
 console.log(objeto.tenis)