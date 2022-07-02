let colors = ['Azul', 'Preto', 'Rosa', 'Roxo', 'Verde'];
console.log("As cores são:", colors)

let names = ['Gomes']
names.unshift('Laysa')
console.log(names);

let bairros = ['São Miguel', 'Tatuapé', 'Barra Funda']
bairros.pop()
console.log(bairros);

let comidas = ['canjica', 'curau', 'paçoca']
comidas.shift()
console.log(comidas);

let festaJunina = ['canjica', 'curau', 'paçoca']
festaJunina.push('bolo de fubá', 'espiga de milho')
console.log(festaJunina);

let numbers = [5,3,2,4,9,0]
numbers.sort(function (a,b){
    return(a-b)
})
console.log(numbers);

