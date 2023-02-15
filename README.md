# Formulario com Express e NodeJS

Este é um código em JavaScript que utiliza o framework Express para criar uma aplicação web. A aplicação tem uma rota que recebe um formulário enviado pelo usuário e, em seguida, verifica se todos os campos do formulário foram preenchidos antes de enviar uma resposta.

## Como funciona o NODE?

O método verifica() é uma função que recebe um objeto contendo os dados do usuário e verifica se cada valor das propriedades do objeto é diferente de uma string vazia. Se todos os valores são diferentes de uma string vazia, a função retorna true, caso contrário, retorna false.

O middleware body-parser é utilizado para interpretar as requisições HTTP que chegam no formato JSON e transformá-las em objetos JavaScript.

O método app.use() é utilizado para definir o caminho para o diretório raiz da aplicação e servir os arquivos estáticos contidos nesse diretório, como um arquivo HTML.

A rota /form é definida para receber um formulário enviado pelo usuário e, em seguida, verifica se todos os campos do formulário foram preenchidos corretamente. Se sim, retorna uma resposta com um código de status 200 e um objeto JSON contendo uma propriedade valid com o valor 1, caso contrário, retorna uma resposta com um código de status 200 e um objeto JSON contendo uma propriedade valid com o valor 0.

## Como funciona a parte do client?

Ao clicar no botão com o ID button, o formulário é submetido. A função enviar é executada e faz uma chamada fetch com os dados do formulário para a rota /form do servidor.

Os dados são enviados no corpo da requisição com o formato JSON. Se a resposta do servidor for { valid: 1 }, significa que os dados do formulário foram enviados com sucesso. Caso contrário, a resposta será { valid: 0 } indicando que houve um erro ao enviar os dados.

Se os dados foram enviados com sucesso, um alerta é exibido com a mensagem "Enviado com sucesso!". Caso contrário, um alerta é exibido com a mensagem "Erro ao enviar! Tente novamente inserindo os dados corretamente!".

O código utiliza a API fetch do JavaScript para fazer requisições assíncronas ao servidor. Além disso, utiliza o método addEventListener para escutar o evento de clique no botão e executar a função enviar.


