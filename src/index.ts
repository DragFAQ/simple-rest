import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import { loadRoutes } from "./routing";

const SERVER_PORT = 3002;

(async () => {
  const app = new Koa();
  const router = loadRoutes();

  app.use(bodyParser());

  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(SERVER_PORT);
  console.log(`Server listening on http://localhost:${SERVER_PORT} ...`);
})();
