const Evaluation = require('../../models/Evaluation')

const allEvaluations = async () => {
  const evaluations = await Evaluation.query()

  return evaluations
}

// const averageRatings = async () => {
//  const ratings = await Evaluation.query()
//   .select('clubId', 'avg')
//  .groupBy('clubId')
//  .avg('rating')


// console.log(ratings)
//  return ratings
// }

const resolver = {
  Query: {
    allEvaluations,
  },
}

module.exports = resolver
