import * as Koa from "koa";
import { BaseContext } from "koa";
import * as bodyParser from "koa-bodyparser";
import * as Router from "koa-router";

const SERVER_PORT = 3002;

(async () => {
  const app = new Koa();
  const router = new Router();

  app.use(bodyParser());

  router.get("/", (ctx: BaseContext, next: Function) => {
    console.log("Root loaded!")
  });

  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(SERVER_PORT);
  console.log(`Server listening on http://localhost:${SERVER_PORT} ...`);
})();
