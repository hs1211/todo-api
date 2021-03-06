import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import logger from 'koa-logger'
import routing from './routes/index'
import {port, connexionString } from './config'

const app = new Koa();

app
  .use(logger())
  .use(bodyParser({
    urlencoded: true
}));

routing(app);

app.listen(port, () => console.log("The server is running at http://localhost:${port}/"));

export default app
