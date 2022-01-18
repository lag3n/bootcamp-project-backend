const CReading = require('../../models/CReading')

const addCurrReading = async (obj, { input }, context) => {
  try 
  {
    return CReading.query().insert({
      userID: input.userID,
      bookID: input.bookID,
      title: input.title,
      author: input.author,
    })
  } 
  catch (e)
  {
    throw new Error('Failed to add Currently Reading')
  }
}

const resolver = {
  Mutation: { 
    addCurrReading,
  }
}

module.exports = resolver