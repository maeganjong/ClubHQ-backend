const app = require('express')()
const stripe = require('stripe')('sk_test_15bAY7qDAL74Lm46rHWIpLPh00vogn8IZU')

app.use(require('body-parser').text())

app.post('/charge', async (req, res) => {
  try {
    const { status } = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Donation',
      source: req.body,
    })

    res.json({ status })
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
})

app.listen(9000, () => console.log('Listening on port 9000'))
