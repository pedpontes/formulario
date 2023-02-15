const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = 5500

function verifica(user){
    valid = Object.keys(user).map(properties => user[properties])
    return valid.every(valor => {return valor != ''})
}

app.use(bodyParser.json())

    //envia o index.html principal

app.use('/', express.static('client'))

    //recebe o formulario

app.post('/form', (req,res) => {
    let valid
    const user = req.body
    valid = verifica(user)
    if(valid)
        res.status(200).json({ valid: 1 })
    else
        res.status(200).json({ valid: 0 })
})

app.listen(PORT, () => console.log("Servidor iniciado na porta", PORT))