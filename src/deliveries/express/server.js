import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import db from '../../models/index'

const sequelize = db.sequelize
const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const port = 3000

export const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}`)
    })
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection to database has been established successfully.')
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err)
      })
  } catch (error) {
    console.log(error)
  }
}
