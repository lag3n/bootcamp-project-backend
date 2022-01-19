const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    addUser(input: AddUser!): User!
    addBooktoRead(input: AddBookList!): Read!
    addBooktoRecs(input: AddBookList!): Recommended!
    addBooktoSaved(input: AddBookList!): Saved!
    addFollow(input: AddFollowPair!): Follow!
    addFriendRec(input: AddFriendRecBook!): FRecommended!
    addCurrReading(input: AddCurrReading!): CReading!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    read_books: [Read!]!
    user_read_books(userID: ID!): [Read!]!
    read_book(id: ID!): Read!
    rec_lists: [Recommended!]!
    rec_list(id: ID!): Recommended!
    rec_listByUser(userID: String!): [Recommended!]
    saveds: [Saved!]!
    saved(id: ID!): Saved!
    savedByUser(userID: String!): [Saved!]
    following: [Follow!]!
    follow(id: ID!): Follow!
    followsByFollower(followingUserID: String!): [Follow!]
    followsByFollowed(followedUserID: String!): [Follow!]
    friend_recs: [FRecommended!]!
    friend_rec(id: ID!): FRecommended!
    friend_recBySender(senderID: String!): [FRecommended!]
    friend_recByReceiver(recipientID: String!): [FRecommended!]
    currently_readings: [CReading!]!
    currently_reading(id: ID!): CReading!
    currently_readingByUser(userID: String!): [CReading!]
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Read {
    id: ID!
    userID: String!
    bookID: String!
    title: String!
    author: String!
  }

  type Recommended {
    id: ID!
    userID: String!
    bookID: String!
    title: String!
    author: String!
  }

  type CReading {
    id: ID!
    userID: String!
    bookID: String!
    title: String!
    author: String!
  }

  type FRecommended {
    id: ID!
    senderID: String!
    recipientID: String!
    bookID: String!
    title: String!
    author: String!
    comment: String
  }

  type Saved {
    id: ID!
    userID: String!
    bookID: String!
    title: String!
    author: String!
  }

  type Follow {
    id: ID!
    followedUserID: String!
    followingUserID: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  input AddUser {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input AddBookList {
    userID: String!
    bookID: String!
    title: String!
    author: String!
  }

  input AddFollowPair {
    followedUserId: String!
    followingUserId: String!
  }

  input AddFriendRecBook {
    senderID: String!
    recipientID: String!
    bookID: String!
    title: String!
    author: String!
    comment: String
  }

  input AddCurrReading {
    userID: String!
    bookID: String!
    title: String!
    author: String!
  }
`
