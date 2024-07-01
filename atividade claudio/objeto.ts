// * Objeto 
// 1. Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua valores a elas.
// interface Endereco {
//     rua: string;
//     numero: number;
//     cidade: string;
//     estado: string;
// }

// interface Pessoa {
//     nome: string;
//     idade: number;
//     endereco: Endereco;
// }

// let pessoa: Pessoa = {
//     nome: 'Claudio jose',
//     idade: 26,
//     endereco: {
//         rua: 'Rua mario sa carneiro',
//         numero: 13,
//         cidade: 'Recife',
//         estado: 'PE'
//     }
// };
// console.log(pessoa);

// 2. Acesse o valor da propriedade "nome" do objeto "pessoa". 
// interface Endereco {
//     rua: string;
//     numero: number;
//     cidade: string;
//     estado: string;
// }

// interface Pessoa {
//     nome: string;
//     idade: number;
//     endereco: Endereco;
// }

// let pessoa: Pessoa = {
//     nome: 'Claudio jose',
//     idade: 26,
//     endereco: {
//         rua: 'Rua mario sa carneiro',
//         numero: 13,
//         cidade: 'Recife',
//         estado: 'PE'
//     }
// };
// let nomePessoa = pessoa.nome;
// console.log(nomePessoa); 

// 3. Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela. 
// interface Endereco {
//     rua: string;
//     numero: number;
//     cidade: string;
//     estado: string;
// }

// interface Pessoa {
//     nome: string;
//     idade: number;
//     endereco: Endereco;
//     profissao?: string;
// }

// let pessoa: Pessoa = {
//     nome: 'Claudio jose',
//     idade: 26,
//     endereco: {
//         rua: 'Rua mario sa carneiro',
//         numero: 13,
//         cidade: 'Recife',
//         estado: 'PE'
//     }
// };
// pessoa.profissao = 'Mecanico';
// console.log(pessoa);

// 4. Atualize o valor da propriedade "idade" do objeto pessoa para um novo valor. 
// interface Endereco {
//     rua: string;
//     numero: number;
//     cidade: string;
//     estado: string;
// }

// interface Pessoa {
//     nome: string;
//     idade: number;
//     endereco: Endereco;
//     profissao?: string;
// }

// let pessoa: Pessoa = {
//     nome: 'Claudio jose',
//     idade: 26,
//     endereco: {
//         rua: 'Rua mario sa carneiro',
//         numero: 13,
//         cidade: 'Recife',
//         estado: 'PE'
//     }      
// };
// pessoa.profissao = 'Mecanico';
// pessoa.idade = 27;
// console.log(pessoa);


// 5. Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua valores a elas.
// interface Endereco {
//     rua: string;
//     numero: number;
//     cidade: string;
//     estado: string;
// }

// interface Pessoa {
//     nome: string;
//     idade: number;
//     endereco: Endereco;
//     profissao?: string;
// }
// interface Animal {
//     nome: string;
//     especie: string;
//     cor: string;
// }

// let animal: Animal = {
//     nome: 'Rex',
//     especie: 'Cachorro',
//     cor: 'Caramelo'
// }

// let pessoa: Pessoa = {
//     nome: 'Claudio jose',
//     idade: 26,
//     endereco: {
//         rua: 'Rua mario sa carneiro',
//         numero: 13,
//         cidade: 'Recife',
//         estado: 'PE'
//     }      
// };
// pessoa.profissao = 'Mecanico';
// pessoa.idade = 27;
// console.log(animal);
// console.log(pessoa);


// 6. Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a elas. 
// interface Endereco {
//     rua: string;
//     numero: number;
//     cidade: string;
//     estado: string;
// }

// interface Pessoa {
//     nome: string;
//     idade: number;
//     endereco: Endereco;
//     profissao?: string;
// }
// interface Animal {
//     nome: string;
//     especie: string;
//     cor: string;
// }

// interface Livro {
//     titulo: string;
//     autor: string;
//     ano: number;
// }

// let livro: Livro = {
//     titulo: '1984',
//     autor: 'George Orwell',
//     ano: 1949
// };

// let animal: Animal = {
//     nome: 'Rex',
//     especie: 'Cachorro',
//     cor: 'Caramelo'
// }

// let pessoa: Pessoa = {
//     nome: 'Claudio jose',
//     idade: 26,
//     endereco: {
//         rua: 'Rua mario sa carneiro',
//         numero: 13,
//         cidade: 'Recife',
//         estado: 'PE'
//     }      
// };
// pessoa.profissao = 'Mecanico';
// pessoa.idade = 27;
// console.log(pessoa);
// console.log(animal);
// console.log(livro);

// 7. Acesse o valor da propriedade "autor" do objeto livro. 
// interface Endereco {
//     rua: string;
//     numero: number;
//     cidade: string;
//     estado: string;
// }

// interface Pessoa {
//     nome: string;
//     idade: number;
//     endereco: Endereco;
//     profissao?: string;
// }
// interface Animal {
//     nome: string;
//     especie: string;
//     cor: string;
// }

// interface Livro {
//     titulo: string;
//     autor: string;
//     ano: number;
// }

// let livro: Livro = {
//     titulo: '1984',
//     autor: 'George Orwell',
//     ano: 1949
// };

// let animal: Animal = {
//     nome: 'Rex',
//     especie: 'Cachorro',
//     cor: 'Caramelo'
// }

// let pessoa: Pessoa = {
//     nome: 'Claudio jose',
//     idade: 26,
//     endereco: {
//         rua: 'Rua mario sa carneiro',
//         numero: 13,
//         cidade: 'Recife',
//         estado: 'PE'
//     }      
// };
// pessoa.profissao = 'Mecanico';
// pessoa.idade = 27;
// console.log(pessoa);
// console.log(animal);
// console.log(livro);
// let autorLivro = livro.autor;
// console.log(autorLivro);

// 8. Atualize o valor da propriedade "ano" do objeto livro para um novo valor. 
// interface Endereco {
//     rua: string;
//     numero: number;
//     cidade: string;
//     estado: string;
// }

// interface Pessoa {
//     nome: string;
//     idade: number;
//     endereco: Endereco;
//     profissao?: string;
// }
// interface Animal {
//     nome: string;
//     especie: string;
//     cor: string;
// }

// interface Livro {
//     titulo: string;
//     autor: string;
//     ano: number;
// }

// let livro: Livro = {
//     titulo: '1984',
//     autor: 'George Orwell',
//     ano: 1949
// };

// let animal: Animal = {
//     nome: 'Rex',
//     especie: 'Cachorro',
//     cor: 'Caramelo'
// }

// let pessoa: Pessoa = {
//     nome: 'Claudio jose',
//     idade: 26,
//     endereco: {
//         rua: 'Rua mario sa carneiro',
//         numero: 13,
//         cidade: 'Recife',
//         estado: 'PE'
//     }      
// };
// pessoa.profissao = 'Mecanico';
// pessoa.idade = 27;
// livro.ano = 1985;
// console.log(pessoa);
// console.log(animal);
// console.log(livro);


// 9. Exclua a propriedade "titulo" do objeto utilizando o operador "delete". 
// interface Livro {
//     titulo?: string;
//     autor: string;
//     ano: number;
// }
// let livro: Livro = {
//     titulo: '1984',
//     autor: 'George Orwell',
//     ano: 1949
// };
// console.log('Antes de excluir:', livro);
// if (livro.titulo) {
//     delete livro.titulo;
// }
// console.log('Depois de excluir:', livro);


// 10. Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano" e atribua valores a elas. Em seguida, exiba todas as propriedades do objeto no console. 
// interface Carro {
//     marca: string;
//     modelo: string;
//     ano: number;
// }
// let carro: Carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2022
// };
// console.log('Marca:', carro.marca);
// console.log('Modelo:', carro.modelo);
// console.log('Ano:', carro.ano);

// 11. Atualize o valor da propriedade "modelo" para "undefined" do objeto "carro" e exiba todas as propriedades do objeto no console.
// interface Carro {
//     marca: string;
//     modelo?: string;
//     ano: number;
// }
// let carro: Carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2022
// };
// carro.modelo = undefined;
// console.log('Marca:', carro.marca);
// console.log('Modelo:', carro.modelo);
// console.log('Ano:', carro.ano);