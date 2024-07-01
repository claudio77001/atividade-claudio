// * Array
// 1. Crie um array vazio chamado "numeros".
// let numeros: number[] = [];

// // 2. Adicione os números 1, 2, 3 e 4 ao array "numeros".
// let numeros: number[] = [];
// numeros.push(1);
// numeros.push(2);
// numeros.push(3);
// numeros.push(4);
// console.log(numeros);

// // 3. Acesse o valor do segundo elemento do array "numeros".
// let numeros: number[] = [10, 20, 30, 40];
// let segundoElemento: number = numeros[1];
// console.log(segundoElemento);


// 4. Atualize o valor do terceiro elemento do array "numeros" para 10.
// let numeros: number[] = [1, 2, 3, 4];
// numeros[2] = 10;
// console.log(numeros)

// // 5. Remova o último elemento do array "numeros" utilizando a função ".pop".
// let numeros: number[] = [1, 2, 3, 4];
// numeros.pop();
// console.log(numeros);

// 6. Verifique o comprimento do array "numeros".
// let numeros: number[] = [1, 2, 3, 4];
// let comprimento = numeros.length;
// console.log(comprimento);

// 7. Crie um novo array chamado "frutas" contendo as strings "maçã", "banana" e "laranja".
// let frutas: string[] = ['maçã', 'banana', 'laranja'];
// console.log(frutas);

// 8. Acesse o valor do primeiro elemento do array frutas.
// let frutas: string[] = ['maçã', 'banana', 'laranja'];
// let primeiroElemento = frutas[0];
// console.log(primeiroElemento);


// 9. Adicione a string "uva" ao final do array frutas utilizando a função ".push".
// let frutas: string[] = ['maçã', 'banana', 'laranja'];
// frutas.push('uva');
// console.log(frutas);

//  10. Crie um objeto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas.
//  Em seguida, crie um array chamado "alunos" e adicione o objeto "aluno" a esse array.
// interface Aluno {
//     nome: string;
//     idade: number;
// }
// let aluno: Aluno = {
//     nome: 'Claudio',
//     idade: 26
// };
// let alunos: Aluno[] = [];
// alunos.push(aluno);
// console.log(alunos);

// 11. Acesse o valor da propriedade "nome" do primeiro elemento do array "alunos".

// interface Aluno {
//     nome: string;
//     idade: number;
// }
// let alunos: Aluno[] = [
//     { nome: 'Claudio', idade: 26 },
//     { nome: 'Daniela', idade: 30 }
// ];

// let primeiroNome = alunos[0].nome;
// console.log(primeiroNome); 

// 12. Adicione mais três objetos do tipo "aluno" ao array "alunos".
// interface Aluno {
//     nome: string;
//     idade: number;
// }

// let alunos: Aluno[] = [
//     { nome: 'Claudio', idade: 26 },
//     { nome: 'Daniela', idade: 30 },
// ];
// alunos.push(
//     { nome: 'Ana', idade: 21 },
//     { nome: 'Pedro', idade: 23 },
//     { nome: 'Carla', idade: 19 }
// );
// console.log(alunos);

// 13. Crie um array chamando "produtos" contendo 10 produtos de supermercado. Em seguida, exiba no
// terminal apenas os produtos que ficaram em posições pares.

// let produtos: string[] = [
//     'Arroz',
//     'Feijão',
//     'Macarrão',
//     'Carne',
//     'Leite',
//     'Ovos',
//     'Pão',
//     'Azeite',
//     'Café',
//     'Açúcar'
// ];
// for (let i = 0; i < produtos.length; i++) {
//     if (i % 2 === 0) {
//         console.log(produtos[i]);
//     }
// }

