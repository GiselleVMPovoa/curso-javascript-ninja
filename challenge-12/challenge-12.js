(function(){
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {name:'Giselle', lastname:'Póvoa', age: 42};
console.log( 'Propriedades de "person":' );
  
  

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(object.keys( person ));
  ['name','lastname','age']
/*
Crie um array vazio chamado `books`.
*/
var books = [];
  

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number

books.push({name:'O pequeno principe',age:175});
books.push({name:'CSS3',pages:350});
books.push({name:'A bela e a fera'.age:254});

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
 { name: 'O pequeno principe', age: 175 },
  { name: 'CSS3', pages: 350 },
  { name: 'A bela e a fera', age: 254 }

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
> var lastbooks= books.pop();
> console.log(lastbooks);
{ name: 'A bela e a fera', age: 254 }
O livro que está sendo removido:  { name: 'A bela e a fera', age: 254 }  

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
Agora sobram somente os livros: [
  { name: 'O pequeno principe', age: 175 },
  { name: 'CSS3', pages: 350 }
]

/*
Converta os objetos que ficaram em `books` para strings.
*/
> JSON.stringify(books);
'[{"name":"O pequeno principe","age":175},{"name":"CSS3","pages":350}]'
  
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
'[{"name":"O pequeno principe","age":175},{"name":"CSS3","pages":350}]'

/*
Converta os livros novamente para objeto.
*/
JSON.parse(books);
  [
  { name: 'O pequeno principe', age: 175 },
  { name: 'CSS3', pages: 350 }
]
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i = 0;i < books.length;i++){for(var  prop in books[i]){console.log(prop + ': ' + books[i][prop]);}}
name: O pequeno principe
age: 175
name: CSS3
pages: 350

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['g','i','s','e','l','l','e','p','o','v','o','a'];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
> console.log( myName.join( ' ' ));
g i s e l l e p o v o a

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
 console.log( myName.reverse());
[
  'a', 'o', 'v', 'o',
  'p', 'e', 'l', 'l',
  'e', 's', 'i', 'g'
]

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
> console.log( myName.sort());
[
  'a', 'e', 'e', 'g',
  'i', 'l', 'l', 'o',
  'o', 'p', 's', 'v'
]
})();
