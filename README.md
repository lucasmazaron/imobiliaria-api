## Description
API With Nestjs.
> Docs:
[Docs Nest](https://docs.nestjs.com)

## Installation

```bash
# Clone project and install dependencies
# For linux, run with sudo
$ npm i -g yarn && npm i -g @nestjs/cli && yarn install
```

> Download and Install DOCKER and DOCKER COMPOSE
```bash
# Create Docker containers
$ make databases
```

```bash
# Kill Project and
# Run prisma Migrations
$ yarn prisma migrate dev

# Start project for create dist folder
$ yarn start:dev


```

```bash
# If necessary Prepare Husky
$ yarn prepare
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```


# Padrões de Controle de Versão

```bash
# Após terminar suas alterações adicionar tudo para enviar
$ git add .

# Commitar
$ yarn commit
```
> * A primeira coisa que irá pedir é uma descrição curta!
> * Nessa descrição, informar o número da TASK e seu nome. Ex: IM-4-tela-de-login (IM-4 Sendo o código da task e o restante o nome).  

> * A segunda desc. que irá pedir, é a desc. longa. Nessa pode informar o que foi feito na task. Ex: Criado tela de login.
> * Em seguida ira pedir algumas informações desnecessárias. Pode dar enter vazio mesmo!
