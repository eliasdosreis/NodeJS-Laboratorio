// Variaveis de carregamento
const express = require('express')
const app = express()
const port = 3001

// Rotas
app.get('/Inicio',(req,res) => res.send('Pagina Inicial'))
app.get('/Sobre',(req,res) =>  res.send('Sobre') )
app.get('/Contato',(req,res) => res.send('Contato'))

// Adicionando porta
app.listen(port,() => console.log(`Servidor foi iniciado na porta.: ${port}`))

