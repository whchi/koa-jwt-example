/* eslint-disable no-unused-vars */
import model from '../database/models/account'
import { uuid } from 'uuidv4'
import { makeHash } from '../helpers'
var args = process.argv.slice(2)
const account = args[0]
const password = uuid()
const hash = makeHash(password)

model.create({ account, password: hash }, (err, res) => {
  if (err) {
    throw err
  }
  console.log('============create success============')
  console.log('account: ' + account)
  console.log('password: ' + password)
  process.exit(0)
})

// function hash() {}

// function name(params) {

// }
