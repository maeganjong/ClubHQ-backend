# Bootcamp GraphQL Practice

This repository contains a partially complete backend built off the starter code we'll be using next week in our final projects. It already contains full completed migrations, seed data, and models, so first get your database up and running (`npm run migrations && npm run seed`). Check out the data in Postico or DBeaver to get a sense of what it looks like.

There are 4 tables: books, authors, publishers, and addresses. There is a one-to-one relation between authors & books and publishers & books (each book has a single author and a single publisher). There is also a one-to-one relation between authors & addresses and publishers & addresses (each author and publisher has an address). Your goal for the day is to complete the GraphQL portion of this project.

### Day 7 AM: GraphQL TypeDefs

The TypeDefs define the types and shapes of data that the client (frontend) can see. Under `src/graphql/typeDefs.js`, define the TypeDefs for this project. It should contain at least 3 queries and 2 mutations, but they can do whatever you'd like. You should aim to declare at least 4 types and 2 inputs.

### Day 7 PM: GraphQL Resolvers

Now that we've defined a TypeDefs for our project, we need to define the 'resolvers' to tell GraphQL how to 'fulfill' our Queries and Mutations. Inside these resolvers is where we'll use all the power of Objection.js that we learned yesterday to manipulate/fetch our database data. You can get started writing your resolvers under `src/graphql/Mutation` and `src/graphql/Query`. An example resolver has been written under `.../Query/Welcome.js`.

You should create separate files to divide up your resolvers by 'type', e.g. in another project you might define a User.js file under both `.../Query` and `.../Mutation`. The former would contain resolvers for all Queries related to Users (getUserById, getAllUsers), while the latter would handle all Mutations related to Users (createUser, editUserInfo). How might you divide up your Mutations/Queries for this project?

Make sure that you write resolvers to completely satisfy your TypeDefs. This includes all subresolvers related to the types you define. For instance, in the FaceBook example we would need to define subresolvers on the `User` type for `friends` and `posts`.