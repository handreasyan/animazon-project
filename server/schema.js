const { gql } = require('apollo-server')

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
    category: Category
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    categories: [Category!]!
    animal(slug: String!): Animal!
    category(slug: String!): Category
  }

  type Mutation {
    addAnimal(
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      slug: String!
      stock: Int!
      onSale: Boolean
      category: String!
    ): Animal

    removeAnimal(id: ID!): Boolean
    updateAnimal(
      id: ID!

      image: String
      title: String
      rating: Float
      price: String
      description: [String!]
      slug: String
      stock: Int
      onSale: Boolean
      category: String
    ): Animal
  }
`

module.exports = typeDefs
