const express = require('express')
const mysql2 = require('mysql2')

const app = express()

app.get('/product', (request, response) =>
{
    const statement = `select id, title, description, price from product`

    connection.query(statement, (isError, products) => {
        connection.end()
    response.end('Hello from server')
})

app.listen(3100, '0.0.0.0', () =>
    {
        console.log('server started at 3100')
    }
)

