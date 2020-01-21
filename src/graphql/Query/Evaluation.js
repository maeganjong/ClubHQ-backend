const Evaluation = require('../../models/Evaluation')

const allEvaluations = async () => {
  const evaluations = await Evaluation.query()

  return evaluations
}


const resolver = {
  Query: {
    allEvaluations,
  },
}

module.exports = resolver
