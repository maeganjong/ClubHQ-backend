const { gql } = require('apollo-server-express')

module.exports = gql`

# 3 queries and 2 mutations
# declare 4 types and 2 inputs

  type Query {
    address: [Address!]!
    author: [Author!]!
    publisher: [Publisher!]!
    books: [Book!]!
    searchAuthor(name: String!): [Author!]!
    searchPublisher(input: String!): [Publisher!]!
    searchAddress(input: String!): [Address!]!
    searchBook(bookId: ID!): Book!
    welcome: String!
    # publishersMoreThanBook(noOfBooks: Int!) [Publisher!]!
  }

  ## you should return the item you changed
  type Mutation {
    createAddress(input: CreateAddressInput!): Address!
    createAuthor(input: CreateAuthorInput!): Author!
    createPublisher(input: CreatePublisherInput!): Publisher!
    createBook(input: CreateBookInput!): Book!
    deleteBook(bookId: ID!): Book!
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
  }

  type Author {
    id: ID! ## always make it like this
    address: Address
    firstName: String!
    lastName: String!
    email: String!
    age: Int
    numBooksPublished: Int
    createdAt: String
  }

  type Publisher {
    id: ID! ## always make it like this
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    address: Address
    createdAt: String
  }

  type Address {
    id: ID! ## always make it like this
    street: String!
    city: String!
    state: String!
    zip: String!
    createdAt: String    
  }

  type Book {
    id: ID!
    author: Author!
    publisher: Publisher!
    title: String!
    language: String!
    numPages: Int
    datePublished: String
    bestSeller: Boolean
    createdAt: String
  }

  type AuthReturn{
    token: String!
    author: Author!
  }

  input RegisterInput{
    email: String!
    password: String!
  }

  # Not a type - but a verb
  # Don't need to include userid - because authentication
  # and post id creation is already automatic
  input CreateAuthorInput {
    addressId: ID
    firstName: String!
    lastName: String!
    email: String
    age: Int
    numBooksPublished: Int
  }

  input CreatePublisherInput {
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    address: CreateAddressInput
  }
  input CreateAddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
    createdAt: String  
  }
  input CreateBookInput {
    authorId: ID!
    publisherId: ID!
    title: String!
    language: String!
    numpages: Int
    datePublished: String
    bestSeller: Boolean
  }
`
