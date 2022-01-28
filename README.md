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

> * Sempre verificar com `git branch` em qual branch você está.  
> * Garantir que está na develop antes de começar.  
> * E também Rodar `git pull` antes para garantir que está com todas as alterações!  
> * Sempre conferir pelo VSCODE os arquivos alterados antes de commitar! Garantir que não
> alterou nada por engano.

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

```bash
# Mudar a branch para a branch da task
# A Branch deve ter o nome da seguinte forma: codigoTask-descrição
$ git switch -C IM-3-tela-login

# Enviar alterações na branch criada
# Alterar nome IM-3-tela-login, para o nome da branch criada com o comando acima.
$ git push origin IM-3-tela-login
```

> Entrar no gitlab, dentro do projeto irá aparecer uma mensagem pedindo para criar o 
> merge request. Clicar no botão para criar!  
> Atribuir uma pessoa para CODE REVIEW e passar a task do JIRA para CODE REVIEW.