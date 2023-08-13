const path = require("path");

//тобі треба зробити реквест на опен везер апі і повернути результат

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const graphql = require("graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

const app = express();


app.use(
  "/graphql",
  graphql.graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err) {
      if (!err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || "An error occured";
      const code = err.originalError.code || 500;
      return { message: message, status: code, data: data };
    },
  })
);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    "mongodb+srv://nikitalytvynov0506:Nikita12235970@cluster0.jqkve7h.mongodb.net/messages"
  )
  .then((result) => {
    app.listen(5050);
  })
  .catch((err) => console.log(err));


