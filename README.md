# order-management-service

Este projeto é um microsserviço para gerenciar pedidos, incluindo a criação, atualização e status de pedidos. Ele foi construído utilizando Node.js, TypeScript, Sequelize, e PostgreSQL, seguindo os princípios do SOLID.

Além disso, este serviço integra-se com um microsserviço de gateway de pagamento desenvolvido em Java. Quando um pedido é criado, o serviço de pagamento é chamado para processar a transação. Caso o pagamento falhe, o pedido é automaticamente cancelado.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

## Features

- [x] Criar um novo pedido
- [x] Processar pagamento
- [x] Atualizar status do pedido

## Próximos passos

- [] Adicionar testes unitarios e de integração
- [] Adicionar autenticação
- [] Criar uma logica de retentativa de pagamento

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (versão 12 ou superior)
- [Git](https://git-scm.com/)

## Instalação

> OBS: E NECESSARIO CONFIGURAR O ARQUIVO .ENV
> **Importante:** O servidor Java (gateway de pagamento) deve estar executando na porta `8080` para que a comunicação entre os microsserviços funcione corretamente.

1. Clonar o repositório:

   ```bash
   git clone https://github.com/7feeh7/checkout-service.git
   ```

2. Instalando as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

3. Configurar banco de dados:

- Renomeie o arquivo .env.example para .env e atualize os detalhes da conexão do banco de dados

4. Construir o projeto:

   ```bash
   npm run prestart
   ```

   ou

   ```bash
   yarn prestart
   ```

5. Inicie o servidor:

   ```bash
   npm run start:dev
   ```

   ou

   ```bash
   yarn start:dev
   ```

6. O servidor agora deve estar em execução em http://localhost:3333.

## Documentação

A documentação da API esta disponível [aqui](https://documenter.getpostman.com/view/15611768/2sA3s3GW7B).

## Contribuindo

Contribuições para o projeto são bem vindas! Pra contribuir com o projeto, siga estas etapas:

1. De um fork no repositorio.
2. Crie uma nova branch para sua feature ou bug fix.
3. Faça suas alterações, confirmando e pressionando conforme necessário.
4. Envie uma solicitação pull com uma descrição detalhada de suas alterações.

## Contato

Para qualquer dúvida ou consulta, entre em contato com [F-softtech](mailto:felipe.pires.soaresti@gmail.com).

Sinta-se à vontade para entrar em contato conosco se tiver algum comentário, sugestão ou se encontrar algum problema ao usar o save-income-backend. Sua opinião é valiosa para nós e nos ajuda a melhorar a aplicação.
