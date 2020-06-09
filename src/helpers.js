import crypto from 'crypto'
import jwt from 'jsonwebtoken'
const SECRET = 'process.env.JWT_SECRET'
/**
 * Generate password hash
 * @param {String} password
 */
export const makeHash = password => {
  return crypto
    .createHmac('sha256', password)
    .update('salt on you')
    .digest('hex')
}
/**
 * Generate jwt token
 * @param {String} payload
 */
export const makeToken = payload => {
  const expired = Math.floor(Date.now() / 1000) + 60 * 60 * 48
  return [
    jwt.sign(
      {
        data: payload,
        exp: expired,
      },
      SECRET
    ),
    expired,
  ]
}

/**
 * @param {String} token
 */
export const verifyToken = token => {
  return jwt.verify(token, SECRET)
}
/**
 * @param {Boolean} success
 * @param {String} msg
 * @param {String} code
 * @param {Array} items
 */
export const formatResponse = (
  success = true,
  msg = 'success',
  code = '0000',
  items = []
) => {
  return {
    success,
    msg,
    code,
    items,
  }
}

export const inputIsValid = (...params) => {
  if (params.every(e => !e)) {
    return false
  }
  return true
}
