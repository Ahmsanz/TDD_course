const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios');
const { users } = require('./src/endpoints');
const url = 'https://jsonplaceholder.typicode.com/users';
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const usersHandlers = users({axios, url});
app.get('/', usersHandlers.get);
app.get('/:id', usersHandlers.getOne)
app.post('/', usersHandlers.post);
app.put('/:id', usersHandlers.put);
app.delete('/:id', usersHandlers.delete);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})