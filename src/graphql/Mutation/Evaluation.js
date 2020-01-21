const Evaluation = require('../../models/Evaluation')

const addEvaluation = async (obj, { input }) => {
    console.log("THIS IS MY INPT!!", input)
  const evaluations = await Evaluation.query().insert(input)
  console.log("SUCCESS")

  return evaluations
}

const resolver = {
  Mutation: {
    addEvaluation,
  },
}

module.exports = resolver