const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const graphqlSchema = require('./graphql/schema/index');
const graphqlResolver = require('./graphql/resolver/index');
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://APIconnection:L4EZApvl8DZYlpUZ@tedrancluster-syqdx.mongodb.net/PoeppelmanSims?retryWrites=true';
const port = process.env.PORT || 8000;


const app = express();

app.use(bodyParser.json());


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
