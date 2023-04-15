// Array de alunos
const alunos = [
    { nome: 'João Pedro', media: 6.5, matricula:4537 },
    { nome: 'Ana Silva', media: 9.4, matricula:9821 },
    { nome: 'Maria', media: 7.0, matricula:7654 },
    { nome: 'João Paulo', media: 8.5, matricula:1234 },
    { nome: 'José Pedro', media: 6.8, matricula:5678 },
    { nome: 'Ana Paula', media: 9.0, matricula:8901},
    { nome: 'João Silva', media: 8.5, matricula:2468 },
    { nome: 'Lucas Filho', media: 6.7, matricula:3690 },
    { nome: 'Pedro Silva', media: 5.2, matricula:7777},
    { nome: 'Lucas Barros', media: 7.1, matricula:8888},
    { nome: 'Lucas Silva', media: 8.0, matricula:2020 },
];

function filtrarNome(arrayAlunos, nome) {
    return arrayAlunos.filter(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()));
}

function filtrarMedia(arrayAlunos, mediaMinima) {
    return arrayAlunos.filter(aluno => aluno.media >= mediaMinima);
}

// console.log(filtrarNome(alunos, 'ana')) // teste-

// console.log(filtrarMedia(alunos, 8.0)); // teste

module.exports = {alunos, filtrarNome, filtrarMedia}