import express from 'express';

const app = express();

app.get('/test', (request, response) => {
  response.send('Hi humans!');
})

app.listen(3001,
  () => console.log('Server is running!')
);
