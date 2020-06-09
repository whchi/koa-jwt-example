import mongoose from 'mongoose'

const user = 'root'
const passwd = 'password'
const port = 27017
const host = 'localhost'

let uri = `mongodb://${host}:${port}/`

if (user && passwd) {
  uri = `mongodb://${user}:${passwd}@${host}:${port}/?authSource=admin`
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}
mongoose.connect(uri, options).catch(err => {
  throw err
})
export { mongoose }
