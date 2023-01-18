# API Restaurantes

## Live application:

https://restaurants-api.up.railway.app/api-docs

<br>

## Como rodar a aplicação:

<br>

### Opção 1 (Docker):

1 - Gerar uma build:

```
docker build -t restaurants-api .
```

2 - Iniciar o container:

```
docker run -p 5050:5050 .
```

### Opção 2 (Sem Docker):

1 - Instalar as dependências:

```
npm install
```

2 - Iniciar a aplicação:

```
npm run start:prod
```

<br>

## Apresentação geral da aplicação:

<br>

### Propósito:

O propósito principal no desenvolvimento desse projeto foi demonstrar meu conhecimento e habilidade no desenvolvimento de APIs REST utilizando Node e TypeScript, bem como a aplicação dos conceitos de Clean Architecture, Clean Code e S.O.L.I.D.

<br>

### Features:

- CRUD Restaurantes
- CRUD Horários de funcionamento
- Endpoint para consultar se restaurante estara aberto na data fornecida

<br>

### Escolha das tecnologias:

- NestJS: Um framework Node.js progressivo para criar aplicações server-side eficientes, confiáveis e escaláveis.;
- Prisma: Object Relational Mapper (ORM) é uma ótima ferramenta para realizar a comunicação com diversos tipos de bancos de dados;

<br>

### Separação de camadas:

#### Domain:

Camada principal e mais interna da aplicação, nela que ficam as entidades, interfaces e casos de uso, nela que são definidas as regras de negócio da aplicação.

#### Presentation:

Essa camada é a parte onde acontece a interação com requisições externas. Essa camada é a porta de entrada para os efeitos que um ser humano, um aplicativo ou uma mensagem terão no domínio. As solicitações serão aceitas dessa camada e a resposta será moldada nessa camada e exibida ao usuário.

#### Data:

Camada responsável por implementar os protocolos dos casos de uso presentes na camada de domínio, nela são injetados os repositórios vindos da camada de infra para realizar a comunicação com banco de dados.

#### Infra:

Esta camada é a que acessa serviços externos, como banco de dados, sistemas de mensagens e serviços de e-mail.
