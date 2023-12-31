# NODE CLEAN ARCHITETURE

## Todo List System

This is a task management system where administrators can register new tasks and assign them to system users.

## Technologies Used

- Node.js
- TypeScript
- Express.js
- MongoDB
- Redis [black list tokens]

## Configuration and Use

1. Make sure you have Node.js installed.
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Configure the required environment variables for the database.
5. Run `npm run test`.

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
$ docker-compose up
```

## Swagger

Visit `https://localhost/api/doc` to view the OPENAPI document in Swagger-UI
