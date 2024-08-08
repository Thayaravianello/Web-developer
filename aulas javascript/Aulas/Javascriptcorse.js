alert("Olá usuario, seja bem vindo");
console.log(" Olá mundo 3.0");

let nome = "Thayara"; // String
let idade = 35; // Number
let logado = true; // Boolean
let lista = ["farinha", "açucar", "banana"]; // Lista
let nomecompleto = { nome: "Thayara", idade: 90 }; // Object

console.log(nome); // Imprimir variavel string
console.log(idade); // IMprimir variavel number
console.log(logado); // imprimir variavel boolean
console.log(lista); // imprimir variavel lista
console.log(nomecompleto); // imprimir object

console.log(typeof nome); // imprimir tipo string
console.log(typeof idade); // imprimir tipo number
console.log(typeof logado); // imprimir tipo boolean
console.log(typeof lista); // imprimir  tipo lista
console.log(typeof nomecompleto); // imprimir tipo object

// Eu sou um comentário para uma unica linhas

/*Eu sou um comentário para texto */

//Exercicios variaveis

let nameCar = "Ferrari";
let preis = 55.99;
let cidade = "Sao Paulo";

console.log(nameCar);
console.log(preis);
console.log(cidade);

// var, let and const

let nameCarNwe = "Ferrari";
nameCarNwe = "Lamborghini";

var nameNew = "Carol";
nameNew = "Bruna";

console.log(nameNew);

//Operações em variáveis

let x = 0;
x = x + 2;
console.log(x);

let y = 2;
y = y + 5;
console.log(y);

//concatenação e não operação matemática

let myname = "thayara";
let mylastname = "Vianello";
let fullname = myname + " " + mylastname;
console.log(fullname);

//Ordem para calculo

let z = 45;
let c = 20;
let n = 10;
let soma = z + c - n;
console.log(soma);

//

let newstudentname = "Caio";
let newstudentlastname = "Castro";
let fullNameComplete = newstudentname + " " + newstudentlastname;
console.log("Name: " + fullNameComplete);

//tamplate string

let nomeCompletoTemplate = ` Thayara Vianello `;
console.log(nomeCompletoTemplate);

let meuNome = "Thayara";
let meuSobrenome = "Vianello";
let age = 35;
let NameFull = ` ${meuNome} ${meuSobrenome} Casada com NIcholas e tem ${
  age + 2
}`;
console.log(NameFull);

//Condicional If / else

let newage = 50;

if (newage >= 18) {
  console.log("Você pode entrar na festa");
} else {
  console.log("Você não pode entrar na festa");
}

//Condicional == e ===

let newageconditional = "20";

if (newageconditional === 18) {
  newageconditional = newageconditional + 15;
  console.log("Você pode entrar na festa");
}
console.log(newageconditional);

//&& e || condicional

let novaIdade = 45;

if (novaIdade >= 18) {
  if (novaIdade <= 60) {
  }
  console.log("VOcê é um adulto");
}

if (novaIdade >= 18 && novaIdade <= 60) {
  console.log("VOcê é um adulto");
}

if (novaIdade >= 18 || novaIdade <= 60) {
  console.log("Você é um adulto");
}

//Condicional if else dupla

if (novaIdade < 18) {
  console.log("VOcê é uma criança");
} else if (novaIdade >= 18) {
  console.log("VOcê é uma dulto");
} else if (novaIdade >= 60) {
  console.log("Você é um idoso");
}

//Desmistificando o IF

let f = 10;
let t = 5;

if (x <= y) {
  console.log(true);
} else {
  console.log(false);
}

let w = "10";
let g = 10;

if (w === g) {
  console.log(true);
} else {
  console.log(false);
}

let m = 10;
let p = 5;

if (m != p) {
  console.log(true);
} else {
  console.log(false);
}

let carnePreis = 55;

if (carnePreis <= 45) {
  console.log(" A carne está barata");
} else {
  console.log("A carne está cara");
}

// Condicional tenário

//Switch

let profession = "pintor";
switch (profession) {
  case "bombeiro":
    console.log("A profissão dele é Bombeiro");

    break;

  case "policial":
    console.log("ELe é um policial");
    break;

  default:
    console.log("Ele é um pintor");
    break;
}

//declarando funcao

function gravidade() {
  console.log("A gravidade é de:");
  console.log(9.8);
}

gravidade();

//Passando parâmetros em funções

function somar(n1, n2) {
  let totalSOma = n1 + n2;
  console.log("O resultado é de:" + totalSOma);
}

somar(12, 34);
somar(45, 88);

function nomeCompleto(nome, sobrenome) {
  console.log(` Seu nome completo é de : ${nome} ${sobrenome}`);
}

nomeCompleto("Thayara", "Vianello");

//retorno da função

function dadosPessoais(nome, sobrenome, idade) {
  return `${nome} ${sobrenome} ${idade}`;
}

let resultadoDados = dadosPessoais("Thayara", "Vianello", 35);
console.log(resultadoDados);

//FUNCAO COM RETORNO CONDICIONAL

function ageVerificataion(ageidade) {
  if (ageidade >= 18) {
    return "Você é maior de idade";
  } else {
    return "Você é menor de idade";
  }
}

let ageidade = 35;
let maioridade = ageVerificataion(ageidade);

if (maioridade) {
  console.log("Você pode entrar na festa");
} else {
  console.log("vocÊ não pode entrar na festa");
}

// Exercicios porcentagem

function porcentagem(n3, n4) {
  return (n4 / n3) * 100;
}

let q = 50;
let r = 20;
let calculoPorcentagem = porcentagem(q, r);
console.log(`${calculoPorcentagem}% de ${q} é ${r}`);

//preço do imovel exercicio

function preisRoom(metro, quarto) {
  let metros2 = 3.0;
  let preisinicial = 0;

  if (quarto == 1) {
    return metros2 * metro;
  } else if (quarto == 2) {
    return metros2 * (metro * 1.2);
  } else if (quarto == 3) {
    return metros2 * (metro * 1.5);
  }
}

let totalPagamentoroom = preisRoom(125, 2);

console.log(`O preço do imóvel é de $:  ${totalPagamentoroom}`);

function imovel(metragem, quartos) {
  let metroQuadrado = 3.0;
  let precoImovel = 0;

  switch (quartos) {
    case 1:
      precoImovel = metroQuadrado * metragem;

      break;

    case 2:
      precoImovel = metroQuadrado * (metragem * 1.2);

      break;

    case 3:
      precoImovel = metroQuadrado * (metragem * 1.5);

      break;
  }

  return precoImovel;
}

let precoFinalDoImovel = imovel(125, 2);
console.log(precoFinalDoImovel);

// exercicio usuario

function usuario(nome, senha) {
  if ((nome = "Pedro" && senha == 123)) {
    return "Usuario Correto";
  } else {
    return "Senha e usuário Incorreto";
  }
}

let usuarioCorreto = usuario("Thayara", 12345);
console.log(usuarioCorreto);

let usuarios = usuario("Pedro", 123);
console.log(usuarios);

//arrow

const sobrenome = (sob) => "Thayara" + sob;

console.log(sobrenome("Soares"));

const calc = (x, y) => {
  return x + y;
};

// Variáveis dentro de funções

let count = 0;

function add() {
  count++;
}

add();
add();

console.log(count);

//Funcao dentro de função

function squares(a, b) {
  const square = (x) => x * x;

  let sQA = square(a);
  let sQB = square(b);
  return sQA + sQB;
}

console.log(squares(2, 3));

//Array = listas de mesmo tipo e tipos diferentes e opracoes basicas

let identification = [
  "nomePersonal",
  "sobrenomePersonal",
  "escolaridade"
];

identification.push("nomeCasada")
identification.pop()
identification.shift()
console.log(`total ${identification.length}`)


let nomePersonal = "Thayara";
let sobrenomePersonal = "VIanello";
let escolaridade = "Bacharel";




console.log(
  ` Os dados pessoais do cliente são: NOme: ${nomePersonal}  
  Sobrenome: ${sobrenomePersonal} Escolaridade: ${escolaridade}`
);





//Exercicios array

let carros = ["BMW", "Ferrari", " Mercedes"];
console.log('1' + carros[1])


console.log("2. Lista com Audi");
carros[1] = "AUdi"
console.log( carros)

carros.push("Volvo")
console.log("3. Lista com VOlvo:")
console.log(carros)


console.log(`Total de itens: ${carros.length}`)




//O que são objetos?

let funcionario = {
  nome: "Thayara",
  sobrenome: "Vianello",
  cargo:"Engenheira de SOftware",
  idade: 35,
  NivelExperiencia: "Senior",
  olhos: ["Caramelo" , "azul"],
  Caracteristicas:{
    formacao: "Engenheira de SOftware e FIsioterapeuta",
    Cursos:" Developer Software"

  }

}

console.log(`Os dados da funcionária são:
  Nome: ${funcionario.nome} 
  Sobrenome: ${funcionario.sobrenome}  ,
  Cargo: ${funcionario.cargo} ,
  Idade: ${funcionario.idade},
  Nivel de Experiência: ${funcionario.NivelExperiencia},
  Caracteristicas : ${funcionario.Caracteristicas.formacao} ,
  e ${funcionario.Caracteristicas.Cursos} Cor dos olhos: ${funcionario.olhos[0]} `
);

console.log(funcionario.nome);

//Acessando e alterando

funcionario.nome="Bruno"
console.log(funcionario.nome)

funcionario.olhos.push("Marrom")


let personagem = {
  nome:" Joseph",
  sobrenome:" VIanello",
  idade: 4,
  caracteristicasForca: {
    ataque: 30,
    velocidade:20

  },
  carros: [ 
    {modelo: "Ferrari", cor: "Amarelo"},
    {modelo: "\lamborghini", cor: "Vermelha"}
  ]

  
}

console.log(`O personagem ${personagem.nome} 
  tem idade de: ${personagem.idade}
  Sua caracteristicas  de velocidade são: ${personagem.caracteristicasForca.velocidade}
  E seu modela de carro preferido é o ${personagem.carros[0].modelo}`)

//

//
//
