import model from '../database/models/account'
import { makeToken } from '../helpers'

export const getToken = (account, hash) => {
  return new Promise((resolve, reject) => {
    model.findOne(
      { account, password: hash },
      { _id: 0, password: 0, __v: 0 },
      (err, res) => {
        if (err) {
          return reject(err)
        }
        if (res) {
          return resolve(makeToken(res))
        }
        reject({ msg: 'no account', code: 404 })
      }
    )
  })
}
