const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;


const app = express();

app.use(bodyParser.json());

app.use('/', (req,res,next) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Express app listening on port ${port}!`))
