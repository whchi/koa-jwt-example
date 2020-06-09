import Koa from 'koa';
import logger from 'koa-logger';
import AccountRouter from './routes/account';
import TestRouter from './routes/test';
const app = new Koa();

app.use(logger());
app.use(AccountRouter.routes());
app.use(TestRouter.routes());

export default app;
