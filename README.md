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

## Instalação

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

## Swagger

Visit `https://localhost/api/doc` to view the OPENAPI document in Swagger-UI
