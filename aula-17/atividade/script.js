//FUNCTION SOMA 
let soma = ((a,b)=> a + b)
console.log(soma(1, 7, ));

//FUNCTION DOBRO
let dobro = ((numeros) => numeros.map((n)=> n * 2))
console.log(dobro([5, 2, 7]))


//FUNÇÃO DENTRO DE FUNÇÃO IMPRIMIR
let executartudo = ((...funcoes) => {
    for(let funcao of funcoes){
        funcao()
    }
})

const bomDia = () => console.log("Bonjuor");
const boaNoite = () => console.log("Bonsuar");

executartudo(bomDia, boaNoite)



//criação de tabela funcionarios empresa


let funcionarios = []
let criarFuncionario = ((pessoa) => funcionarios.push({id: funcionarios.length, ...pessoa}))

criarFuncionario({nome: "marcos", setor: "funilaria", salario: 3000})
criarFuncionario({nome: "Exoedito", setor: "CEO", salario: 5000})
criarFuncionario({nome: "Nayara", setor: "Administração", salario: 2000})
criarFuncionario({nome: "Carlos", setor: "Pintura", salario: 3500})

let indiceLocalizacao = 3

let localizarFuncionario = funcionarios.find((funcionario) => funcionario.id === 3)
console.log(localizarFuncionario.nome);

let idParaAtualizar = 1

let atualizarFuncionario = ((id, novosDados) => {
    const indice = funcionarios.findIndex((funcionario => funcionario.id === idParaAtualizar))
    if (indice !== -1){
        funcionarios[indice] = {id, ...novosDados}
    } else {
        console.log("Funcinário não Encontrado");
    }
    })

atualizarFuncionario(idParaAtualizar, {nome: 'Bernardo', setor: "Limpreza"})
console.log(funcionarios);

// Excluindo um funcionário

const excluirFuncionario = (id) => {
    const indice = funcionarios.findIndex((funcionario) => funcionario.id === id);
    if (indice !== -1) {
        funcionarios.splice(indice, 1); // Remover 1 elemento no índice encontrado
    } else {
        console.log("Funcionário não encontrado");
    }
};

// Chamando a função para excluir o funcionário com ID 0
excluirFuncionario(0);

// Exibindo o array atualizado após a exclusão
console.log(funcionarios);