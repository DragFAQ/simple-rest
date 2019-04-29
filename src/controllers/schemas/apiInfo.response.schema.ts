import * as Joi from "joi";
import { definition } from "koa-joi-swagger-ts";

import { BaseAPIResponseSchema } from "./baseAPI.response.schema";

@definition("ApiInfo", "Information data about current application and API version")
export class ApiInfoResponseSchema extends BaseAPIResponseSchema {
  public data = Joi.object({
    appVersion: Joi.string()
      .description("Current version of application")
      .required(),
    build: Joi.string().description("Current build version of application"),
    apiVersion: Joi.number()
      .positive()
      .description("Version of current REST api")
      .required(),
    reqHeaders: Joi.object().description("Request headers"),
    apiDoc: Joi.string()
      .description("URL path to swagger document")
      .required()
  }).required();
}
