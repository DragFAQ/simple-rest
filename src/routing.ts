import { KJSRouter } from "koa-joi-swagger-ts";
import { BaseController } from "./controllers/base.controller";
import { BaseAPIResponseSchema } from "./controllers/schemas/baseAPI.response.schema";
import { ApiInfoResponseSchema } from "./controllers/schemas/apiInfo.response.schema";

const SERVER_PORT = 3002;

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

  router.loadController(BaseController);

  router.setSwaggerFile("swagger.json");
  router.loadSwaggerUI("/api/docs");

  return router.getRouter();
};
