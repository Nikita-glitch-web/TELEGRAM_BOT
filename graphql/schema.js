const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type City {
    id: ID!
    name: String!
}

type RootQuery {
    city:(cityName: String!): City!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);