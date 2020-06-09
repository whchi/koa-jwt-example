/* eslint-disable no-unused-vars */
import Router from '@koa/router';
import AuthMiddleWare from './middlewares/auth';
const router = new Router({ prefix: '/test' });

router.use(AuthMiddleWare);
router.get('', async (ctx, next) => {
  // codes here
});

export default router;
