// URL, BODY, METHOD, HEADERS
import axios from 'axios'

function print(res){
    console.log(`statusCode: ${res.status}`)
    console.log(`body: ${res.data}`)
    console.log(res)
}

/**
 * 1. Fazer uma requisição GET para a URL https://filipefonseca.com/api/workshop
 */

function primeiro() {
    axios
    .get('https://filipefonseca.com/api/workshop')
    .then(res => {
        print(res)
    })
    .catch(error => {
    console.error(error)
    }) 
}

/**
 * 2. Fazer uma requisição GET para a URL https://filipefonseca.com/api/works
 */

function segundo() {
    axios
    .get('https://filipefonseca.com/api/works')
    .then(res => {
        print(res)
    })
    .catch(error => {
    console.error(error)
    }) 
}

/**
 * 3. Fazer uma requisição GET para a URL https://filipefonseca.com/api/workshop com o parâmetro name
 */

function terceiro(){
    axios
    .get('https://filipefonseca.com/api/workshop?name=luiza')
    .then(res => {
        print(res)
    })
    .catch(error => {
    console.error(error)
    })
}

/**
 * 4. Fazer uma requisição GET para a URL https://filipefonseca.com/api/workshop com o parâmetro id entre 1 e 5
 */

function quarto(){
    axios
    .get('https://filipefonseca.com/api/workshop?id=2')
    .then(res => {
        print(res)
    })
    .catch(error => {
    console.error(error)
    })
}

const motoca = new Object();
 motoca.name = "nmax";
 motoca.color = "black";

/**
 * 5. Fazer uma requisição POST para a URL https://filipefonseca.com/api/workshop passando um objeto qualquer
 */

function quinto(){
    axios
    .post('https://filipefonseca.com/api/workshop', motoca)
    .then(res => {
        print(res)
    })
    .catch(error => {
    console.error(error)
    })
}

/**
 * 6. Fazer uma requisição POST para a URL https://filipefonseca.com/api/workshop passando um objeto qualquer dentro
 * do body da requisição e op content-type com o valor application/json
 */

function sexto(){
    axios
    .post('https://filipefonseca.com/api/workshop', motoca, {headers: {"Content-type":"application/json"}})
    .then(res => {
        print(res)
    })
    .catch(error => {
    console.error(error)
    })
}

sexto()