# Criar endpoints que recebem requisições HTTP com Spring Boot

## O que seriam endpoints (ponto de extremidade)?

Em termos simples, um endpoint de serviço da Web é uma URL na qual os clientes 
de um serviço específico podem obter acesso a ele. Ao fazer referência a essa URL, 
os clientes podem acessar as operações fornecidas por esse serviço. O endpoint é um 
ponto de conexão em que os arquivos HTML ou as páginas ativas do servidor são expostos.

## Recurso (resource)

Um recurso refere-se à informação retornada por uma API.

- `/loan`
- `/message`
- `/bill`
- `/products`
- `/orders`

## Métodos

- GET /loans?id=234
- POST /loans {}
- PUT /messages/{id}
- PATCH
- DELETE /bills/{id}

## Acessando ou modificando um recurso

- POST /messages
- GET /messages
- GET /messages/{id}
- PATCH /messages/{id}
- DELETE /messages/{id}
- POST /messages/{id}/actions/send
- POST /messages/{id}/actions/cancel
- GET /messages/{id}/id
- GET /messages/{id}/state
- GET /messages/{id}/person-id

## Parâmetros

### Header

Api-Key-X: 1234567
Firebase-Token-X: hjnlk32nb35jbn3lk4n 

### Path

- /messages/{model}/{code}

### Query

- /messages/?personId=12234&state=SENT&state=SCHEDULED

## Body

{
    "content": "sdsgs ",
    "recipient": "adfsdgf"
}


# Exercícios

1. 