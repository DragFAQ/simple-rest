import { KJSRouter } from "koa-joi-swagger-ts";
import { BaseController } from "./controllers/base.controller";
import { BaseAPIResponseSchema } from "./controllers/schemas/baseAPI.response.schema";
import { ApiInfoResponseSchema } from "./controllers/schemas/apiInfo.response.schema";
import { UserController } from "./controllers/user.controller";
import { UsersResponseSchema } from "./controllers/schemas/users.response.schema";
import { UsersRequestSchema } from "./controllers/schemas/users.request.schema";
import { BaseContext } from "koa";
import { TransferObjectUtils } from "./utils/transferObject.utils";

const SERVER_PORT = 3002;

const controllerDecorator = async (controller: Function, ctx: BaseContext, next: Function, summary: string): Promise<void> => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  ctx.body = null;
  ctx.status = 400;
  ctx.statusMessage = `Error while executing '${summary}'`;
  try {
    await controller(ctx);
  } catch (e) {
    console.log(e, `Error while executing '${summary}'`);
    ctx.status = 500;
  }
  ctx.body = TransferObjectUtils.createResponseObject(ctx.status, ctx.statusMessage, ctx.body);
};

export const loadRoutes = () => {
  const router = new KJSRouter({
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "simple-rest"
    },
    host: `localhost:${SERVER_PORT}`,
    basePath: "/api/v1",
    schemes: ["http"],
    paths: {},
    definitions: {}
  });

  router.loadDefinition(ApiInfoResponseSchema);
  router.loadDefinition(BaseAPIResponseSchema);
  router.loadDefinition(UsersResponseSchema);
  router.loadDefinition(UsersRequestSchema);

  router.loadController(BaseController);
  router.loadController(UserController, controllerDecorator);

  router.setSwaggerFile("swagger.json");
  router.loadSwaggerUI("/api/docs");

  return router.getRouter();
};
