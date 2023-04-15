const express =  require('express');
const dados = require("./alunos.js")
const fs = require('fs')
// Configuração do app
const app = express();
// Lê o body no formato Json
app.use(express.json())

function writeToFile(data) {
    fs.writeFile('db.json', JSON.stringify(data), err => {
    if (err) {
        console.error(err);
    return;
    }
    console.log('Dados atualizados com sucesso!');
    });
}

// Rotas
app.get("/alunos" , (req, res) => {
    const {nome, media} = req.query;
    if (!media && !nome) {
        res.json(dados.alunos)
    } else if (!media && nome) {
        res.json(dados.filtrarNome(dados.alunos, nome))
    } else if (media && !nome) {
        res.json(dados.filtrarMedia(dados.alunos, media))
    } else if (media && nome) {
        res.status(400).json({message: "Escolha apenas um tipo de dado para filtragem!"})
    }
    
    
})

app.post("/alunos/novo" , (req, res) => {
    const {nome, media, matricula} = req.body
    if (!nome  || !media || !matricula) {
        res.status(400).json({message:"Insira os dados completos do alunos"})
    } else {
        dados.alunos.push( {nome, media, matricula})
        writeToFile(dados.alunos)
        res.json(dados.alunos)
    }
})

app.post("/alunos/deletar/:index" , (req, res) => {
    const index = Number(req.params.index)
    
    if (!dados.alunos[index]) {
        res.status(404).json({message: " Index de aluno inválido"})
    } else {
        dados.alunos.splice(index, 1)
        writeToFile(dados.alunos)
        res.json(dados.alunos)
    }
})

app.post("/alunos/atualizar/:index" , (req, res) => {
    const {nome, media} = req.body
    const index = Number(req.params.index)
    if (!dados.alunos[index]) {
        res.status(404).json({message: " Index de aluno inválido"})
    } else {
        dados.alunos[index].nome = nome;
        dados.alunos[index].media = media;
        writeToFile(dados.alunos)
        res.json(dados.alunos)
    }
})

//Rscuta das requisições
app .listen(3000,() => {
    console.log("Servidor rodando em http://localhost:3000/");
})