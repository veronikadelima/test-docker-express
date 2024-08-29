const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o servidor e faz com que ele escute na porta definida
app.listen(port, () => {
  console.log(`Exempo app listening on port ${port}`);
});