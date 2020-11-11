const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const graphqlSchema = require("./graphql/schema/index");
const graphqlResolver = require("./graphql/resolver/index");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(
  "/api",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () =>
      console.log(`Poeppelman Graphql API listening on port ${port}!`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
