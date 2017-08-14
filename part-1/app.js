const express = require('express')
const app = express();

app.get('/api/shout/:word', (request, response) => {
  const { word } = request.params
  response.status(200).send(word.toUpperCase() + '!!!')
})

app.listen(3000, () => {
  console.log('App is running on localhost:3000')
})
