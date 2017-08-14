const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())


app.get('/api/shout/:word', (request, response) => {
  const { word } = request.params
  response.status(200).send(word.toUpperCase() + '!!!')
})

app.post('/api/array/merge', (request, response) => {
  const a = request.body.a
  const b = request.body.b
    if(Array.isArray(a) && Array.isArray(b)){
      const result = a.concat(b)
      console.log(result)
      response.json({'result': result})
    } else if (!Array.isArray(a) || !Array.isArray(b)) {
      response.status(400).json({"error": 'Input data should be type of array.'})
    }
})

app.listen(3000, () => {
  console.log('App is running on localhost:3000')
})
