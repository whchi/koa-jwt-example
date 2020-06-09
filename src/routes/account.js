/* eslint-disable no-unused-vars */
import Router from '@koa/router'
import { getToken } from '../services/account'
import bodyParser from 'koa-bodyparser'
import { makeHash, formatResponse } from '../helpers'
const router = new Router({ prefix: '/account' })

router.use(bodyParser())
router.post('/token', async (ctx, next) => {
  const body = ctx.request.body
  if (
    !Object.prototype.hasOwnProperty.call(body, 'account') ||
    !Object.prototype.hasOwnProperty.call(body, 'password')
  ) {
    ctx.body = formatResponse(false, 'Invalid parameter', '0400', [])
    ctx.status = 400
    return
  }
  try {
    const hash = makeHash(body.password)
    const [token, expiredAt] = await getToken(body.account, hash)
    ctx.body = { token, expiredAt }
    ctx.status = 200
    return
  } catch (error) {
    ctx.body = formatResponse(false, error.msg, `0${error.code}`)
    ctx.status = error.code
  }
})

export default router
