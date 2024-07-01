//  ATIVIDADE 

//  SOFTEX PERNAMBUCO 
//  Professor: Augusto César Oliveira
//  Curso: Front-end
// Aluno(a): Claudio Jose Rodrigues de Sousa Filho data: ___/___/______ 

//               Aula 02 - Tipos de dados e variáveis

//  * Geral
//  1. Defina o que é uma variável na programação.
//  Uma variável na programação é um elemento fundamental usado para armazenar e manipular dados.

// 2. Escreva com as suas palavras a diferença entre as declarações const, let e var e 
// como elas podem ser aplicadas na prática. 

// 'VAR' tem escopo de função ou escopo global. Se declarada dentro de uma função, ela é visível em toda a função.
// 'let' tem escopo de bloco, ou seja, ela só é visível dentro do bloco onde foi declarada (como dentro de {}).
// 'const' não pode ser reatribuída, ou seja, seu valor não pode ser mudado após a inicialização. No entanto, se a variável for um objeto ou array, as propriedades ou elementos 
// internos podem ser alterados.


// 3. Explique a diferença entre as variáveis do tipo objeto e lista

// Um objeto é uma coleção de propriedades, onde cada propriedade é uma associação entre um nome (ou chave) e um valor.
// Uma lista é uma coleção ordenada de valores, onde cada valor é identificado por um índice numérico.

// *String 
// 1. Crie uma variável chamada "nome" e atribua a ela uma string com seu nome. 
// Em seguida, exiba o conteúdo da variável "nome" no terminal

// const nome : string = "claudio"
// console.log(nome);

// 2. Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. 
// Em seguida, exiba o comprimento da string armazenada na variável "frase".

// const frase: string = "frase"
// const primeiraLetra: string = frase.charAt(0);
// console.log("A primeira letra da frase é:", primeiraLetra);

// 3. Crie uma variável chamada "palavra" e atribua a ela uma palavra qualquer. Em seguida, 
// exiba a primeira letra da palavra armazenada na variável "palavra". 

// const palavra: string = "palavra"
// const primeiraLetra: string = palavra.charAt(0);
// console.log("A primeira letra da frase é:", primeiraLetra);


// 4. Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. 
// Em seguida, exiba a frase em letras maiusculas. 

// let frase: string = "frase";
//  console.log(frase.toUpperCase());

// 5. Crie uma variável chamada "endereço" e atribua a ela um valor de sua escolha. 
// Em seguida, sobrescreva o valor da variável para um outro endereço e verifique no terminal o valor atual da variável.

// let endereço: string = "Rua mario sa carneiro, 13";
// console.log("Endereço inicial:", endereço);
// endereço = "Avenida rui barbosa, 456";
// console.log("Endereço atual:", endereço); 

