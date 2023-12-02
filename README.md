# NODE CLEAN ARCHITETURE

## Sistema de Tarefas

Este é um sistema de gerenciamento de tarefas onde os administradores podem cadastrar novas tarefas e atribuí-las aos usuários do sistema.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- Banco de dados MongoDB

## Configuração e Uso

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. Execute `npm install` para instalar as dependências.
4. Configure as variáveis de ambiente necessárias para o banco de dados.
5. Execute `npm run test`.

## Installation

```sh
$ npm install
```

```sh
$ cp .env.example .env.dev
```

## Test

```sh
$ npm run test
```

## Docker

```sh
$ cd docker
```

```sh
$ docker-compose up -d
```

## Endpoints da API

### Listar Todas as Tarefas

GET https://localhost/api/tasks

Retorna todas as tarefas cadastradas no sistema.

### Listar Uma Tarefa

GET https://localhost/api/tasks/:taskId

Retorna uma tarefa cadastrada no sistema.

### Criar uma Nova Tarefa

POST https://localhost/api/tasks

Cria uma nova tarefa no sistema. Requer dados específicos no corpo da requisição, como name, user_id, etc.

### Atualizar Tarefa

PUT https://localhost/api/tasks/:taskId

Atualiza uma tarefa específica.

### Remover Tarefa

DELETE https://localhost/api/tasks/:taskId

Remove uma tarefa específica.
