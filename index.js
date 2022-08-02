/* confiurações do servidor - início */
// carregar o módulo express
const express = require('express')
// excutar o módulo express
const app = express()
//definir a pasta dos arquivos ejs
app.set('views','./')
//criar uma instancia local
app.listen(3050,()=>{
    console.log("servidor local em http://localost:3050")
})
/* configurações do servidor - fim */

/* configuração do banco de dados - início */
//importar o módulo mongoose
const mongoose = require('mongoose')
//configurar o script de conexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisão:dodge1313@fiaptecnico.hsj9v.mongodb.net/test')
}

/* confiuração do banco de dados - fim */

/* rota para a requisição / */
app.get('/',(req,res)=>{
    res.render('index.ejs',{nome:"Aluno Feiosos",
    turma:"2EMIA",disciplina:"LP2"})
})

