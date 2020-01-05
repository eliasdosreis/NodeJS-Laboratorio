// Variaveis de carregamento
const express = require('express')
const app = express()
const port = 3001

// Rotas
app.get('/Inicio',(req,res) => res.sendFile(__dirname + '/html/index.html'))
app.get('/Sobre',(req,res) =>  res.sendFile(__dirname + '/html/sobre.html'))
app.get('/Contato',(req,res) => res.sendFile(__dirname + '/html/contato.html'))

// Adicionando porta
app.listen(port,() => console.log(`Servidor foi iniciado na porta.: ${port}`))

