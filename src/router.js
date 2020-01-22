const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    allClubs: [Club!]!
    getClub(clubId: ID!): Club!
    searchClubs(input:String!):[Club]!
  }

  type Mutation{
    addClub(input: AddClubInput!): Club!
    addEvaluation(input: AddEvaluationInput!): Evaluation!
    register(email:String!, password:String!): AuthReturn!
    login(email:String!, password: String!): AuthReturn!
  }

  type Club{
    id: ID!
    name: String!
    email: String
    website: String
    size: String
    summary: String!
    comp: String!

  }

  type User{
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!

  }

  type Evaluation{
    id: ID!
    userId: ID!
    clubId: ID!
    hoursOfMeeting: Int
    hoursOfWork: Int
    rating: Int
    comments: String!

  }

  type AuthReturn{
    user: User!
    token: String!
  }
  input AddClubInput{
    name: String!
    email: String
    website: String
    size: String
    summary: String!
    comp: String!
  }

  input AddEvaluationInput{
    userId: ID!
    clubId: ID!
    hoursOfMeeting: Int
    hoursOfWork: Int
    rating: Int
    comments: String!
  }
`