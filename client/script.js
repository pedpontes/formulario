const fname = document.querySelector('#fn')
const lname = document.querySelector('#ln')
const email = document.querySelector('#em')
const contact = document.querySelector('#con')
const button = document.querySelector('#button')

function enviar() {
    fetch('/form', {
        method: 'POST',
        headers:{
            "Content-Type": 'application/JSON'
        },
        body: JSON.stringify({
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            contact: contact.value
        })
    }).then( res => res.json())
        .then( data => {
            data.valid == 1 
            ?alert('Enviado com sucesso!') 
            :alert('Erro ao enviar! Tente novamente inserindo os dados corretamente!')
        })
}

button.addEventListener('click', enviar)