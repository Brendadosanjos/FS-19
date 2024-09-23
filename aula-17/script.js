// Function - Arrow Function - Parâmetros
function somaDasNotas(notas) {
    let soma = 0
    notas.forEach((nota) => soma += nota)
    return soma
}

function calcularMedia(notas) {
    const soma = somaDasNotas(notas)
    return (soma / notas.length).toFixed(2)
}

console.log(calcularMedia([5.5, 7, 4, 8, 6.3]))

// Array - Objeto - (desestruturação)
							
let alunos1 = [
    {id: 1, nome: 'Matheus', idade: 16, serie: '1A'},
    {id: 2, nome: 'Arthur', idade: 15, serie: '1B'},
    {id: 3, nome: 'Davi', idade: 17, serie: '1C'},

]


alunos1.unshift({id: 0, nome: 'Fulano', idade:16, serie: '2C'})
alunos1 = alunos1.filter((aluno) => aluno.id !== 2)
alunos1.forEach((aluno) => {
    if(aluno.id === 1){
        aluno.nome = 'Ciclano'
    }
})

alunos1.pop()
alunos1.shift()

console.log(alunos1);
//-----------------------------------------------------------------------------------------------------
// Criem 4 funções
// criarAluno(nome, idade, serie) - criar com o id, recebe os dados, menos o id
let alunos = []
const criarAluno = (aluno) => alunos.push({ id: alunos.length, ...aluno })
criarAluno({ nome: 'Gil', idade: 26, serie: '6B' })
criarAluno({ nome: 'Gil', idade: 26, serie: '6B' })
criarAluno({ nome: 'Gil', idade: 26, serie: '6B' })

// console.log(alunos)
// lerAluno() - recebe o id como parametro e retorna o aluno
function lerAluno(id) {
    const aluno = alunos.find((aluno) => aluno.id === id)
    return aluno
}

// atualizarAluno() - recebe o id e dados para atualizar os campos
function atualizarAluno({ id, ...rest }) {
    const indice = alunos.findIndex((aluno) => aluno.id === id)
    const dadosAntigos = alunos[indice]
    alunos[indice] = { ...dadosAntigos, ...rest }
}

atualizarAluno({ id: 0, nome: 'Fulano', serie: '7A' })

// console.log(alunos)

// deletarAluno() - recebe o id e deleta o aluno

function deletarAluno(id) {
    const indice = alunos.findIndex((aluno) => aluno.id === id)
    alunos.splice(indice, 1)
}

deletarAluno(0)
console.log(alunos)

//-----------------------------------------------------------------------------------------------------
//novo
// Criem 4 funções
// criar com o id, recebe os dados, menos o id
// recebe o id como parametro e retorna o aluno
//atualizarAluno() - recebe o id e dados para atualizar os campos
// deletarAluno() - recebe o id e deleta o aluno

const usuarios = []
let cadastroUsuarios = (usuario) => usuarios.push({id: usuarios.length + 1, ...usuario})

cadastroUsuarios({nome: "Roberta", idade: 15, cidade: "Fortaleza"})
cadastroUsuarios({nome: "Leticia", idade: 14, cidade: "Barreirinha"})
cadastroUsuarios({nome: "Victor", idade: 12, cidade: "Parnaiba"})
cadastroUsuarios({nome: "Lucas", idade: 16, cidade: "João Pessoa"})
cadastroUsuarios({nome: "Carla", idade: 15, cidade: "Salvador"})

console.log(usuarios);



// recebe o id como parametro e retorna o aluno

const idDesejado = 3; 

const lerID = (id) => usuarios.find((i) => i.id === idDesejado)

const usu = lerID(idDesejado);

console.log(usu.nome);


//atualizarAluno() - recebe o id e dados para atualizar os campos

const atualizarUsuario = (id, novoUsuario) => {
    const indice = usuarios.findIndex((usuario) => usuario.id === id);
    if (indice !== -1) {
        usuarios[indice] = { id, ...novoUsuario };
    } else {
        console.log('Usuário não encontrado.');
    }
};

// Atualizando o usuário com ID 2
atualizarUsuario(2, { nome: "Leticia Oliveira", idade: 15, cidade: "Barreirinha" });

// Imprimindo o array atualizado
console.log(usuarios);




const excluirUsuario = (id) => {
    const indice = usuarios.findIndex((usuario) => usuario.id === id);
    if (indice !== -1) {
        usuarios.splice(indice, 1);
    } else {
        console.log('Usuário não encontrado.');
    }
};

// Excluindo o usuário com ID 2
excluirUsuario(2);

// Imprimindo o array atualizado
console.log(usuarios);
