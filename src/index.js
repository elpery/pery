import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import 'babel-polyfill'

import bodyParser from 'body-parser'


/*


*/

let port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Delivers content
app.get('/init', async (req, res) => {
  res.send({ test: 'hello innit' })
})

app.listen(port, () => {
  console.log('Dimmortal :: Server Live on port', port)
})
