import express from 'express'

const app = express()

app.get('/test', (request, response) => {
  return response.send("Hi NLW Together")
})

app.post("/testPost", (request, response) => {
  return response.send("Hi NLW - POST method")
})

app.listen(3001,
  () => console.log("Server is running - VALORIZA API")
)