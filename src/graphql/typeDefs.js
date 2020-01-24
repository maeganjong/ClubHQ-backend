const { gql } = require('apollo-server-express')

module.exports = gql`
   type Query {
    allClubs: [Club!]!
    getClub(clubId: ID!): Club!
    searchClubs(input:String!):[Club]!
    allEvaluations: [Evaluation!]!
    getEvaluationsOfClub(clubId: ID!): [Evaluation]!
    allUsers: [User!]!
    getUser(userId: ID!): User!
    searchTags(input:String!): [Tag]!
    getTagsOfClub(clubId: ID!): [Tag]!
    allTags: [Tag]!
    searchClubsByTag(tagId:ID!):[Club]!
    search(input:String):[SearchResult]!
    topRated: [Club]!
       
  }

  type Mutation{
    addClub(input: AddClubInput!): Club!
    addEvaluation(input: AddEvaluationInput!): Evaluation!
    register(email:String!, password:String!,firstName: String!,lastName: String!, classYear: String!): AuthReturn!
    login(email:String!, password: String!): AuthReturn!
    addTag(input:AddTagInput!): Tag!
    addTagToClub(tagId: ID!, clubId: ID!):Tag!
 }

  type Club{
    id: ID!
    name: String!
    email: String
    website: String
    size: Size
    avgRating: Float
    avgMeeting: Float
    avgWorking: Float
    summary: String!
    competitiveness: Competitiveness

  }

  type User{
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    classYear: String!
    passHash: String!
  }

  type Evaluation{
    id: ID!
    clubId: ID!
    hoursOfMeeting: Int
    hoursOfWork: Int
    rating: Int
    comments: String

  }
  type Tag{
    id: ID!
    text: String!
  }

  type AuthReturn{
    user: User!
    token: String!
  }
  enum Size{
    SMALL
    MEDIUM
    LARGE
  }
  
  enum Competitiveness{
    COMPETITIVE
    COMPLETION
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
    clubId: ID!
    hoursOfMeeting: Int
    hoursOfWork: Int
    rating: Int
    comments: String!
  }


input AddTagInput{
    id: ID!
    text: String!
}

input AddTagToClubInput{
	  tagId: ID!
	  clubId: ID!
}

union SearchResult = Club | Tag
`
