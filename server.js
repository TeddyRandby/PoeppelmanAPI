const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const graphqlSchema = require('./graphql/schema/index');
const graphqlResolver = require('./graphql/resolver/index');
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || "mongodb://APIConnection:daniela12#@ds343895.mlab.com:43895/heroku_1wp0hgxn";
const port = process.env.PORT || 8000;


const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use('/api', graphqlHttp({

  schema: graphqlSchema,
  rootValue: graphqlResolver,
  graphiql: true

}));

mongoose
  .connect(
    mongoURI, {
      useNewUrlParser: true
    }
  ).then(() => {
    app.listen(port, () => console.log(`Poeppelman Graphql API listening on port ${port}!`))
  })
  .catch( err => {
    console.log(err);
  });
