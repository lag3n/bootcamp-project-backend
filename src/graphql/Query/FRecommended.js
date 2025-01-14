const FRecommended = require('../../models/FRecommended')

const friend_recs = async () => {
  try 
  {
    const f_rec = await FRecommended.query()
    return f_rec
  } 
  catch (e)
  {
    throw new Error('Failed to return Friend Recommendations')
  }
}

const friend_rec = async (obj, { id }, context) => {
  const f_rec = await FRecommended.query().findOne('id', id)
  return f_rec
}

const friend_recBySender = async (obj, { senderID }, context) => {
  const f_rec = await FRecommended.query().where('senderID', senderID)
  return f_rec
}

const friend_recByReceiver = async (obj, { recipientID }, context) => {
  const f_rec = await FRecommended.query().where('recipientID', recipientID)
  return f_rec
}

const resolver = {
  Query: { 
    friend_recs,
    friend_rec,
    friend_recBySender,
    friend_recByReceiver,
   },
}

module.exports = resolver
