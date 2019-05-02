import { BaseContext } from "koa";
import {
  controller,
  description,
  ENUM_PARAM_IN,
  get,
  parameter,
  post, put,
  response,
  summary,
  tag
} from "koa-joi-swagger-ts";
import { BaseController } from "./base.controller";
import { BaseAPIResponseSchema } from "./schemas/baseAPI.response.schema";
import { getAllUsers, insertUser, updateUser } from "../services/user.service";
import { UsersResponseSchema } from "./schemas/users.response.schema";
import { UsersRequestSchema } from "./schemas/users.request.schema";

@controller("/users")
export abstract class UserController extends BaseController {
  @get("/")
  @response(200, { $ref: UsersResponseSchema })
  @response(400, { $ref: BaseAPIResponseSchema })
  @response(500, { $ref: BaseAPIResponseSchema })
  @tag("User")
  @description("Returns list of all users")
  @summary("Get all users")
  public async getAllUsers(ctx: BaseContext): Promise<void> {
    let serviceResult = await getAllUsers();
    if (serviceResult) {
      ctx.body = serviceResult;
      ctx.status = 200;
      ctx.statusMessage = null;
    }
  };

  @post("/")
  @parameter("body", { $ref: UsersRequestSchema }, ENUM_PARAM_IN.body)
  @response(200, { $ref: BaseAPIResponseSchema })
  @response(400, { $ref: BaseAPIResponseSchema })
  @response(500, { $ref: BaseAPIResponseSchema })
  @tag("User")
  @description("Update user data")
  @summary("Update user data")
  public async updateUser(ctx: BaseContext): Promise<void> {
    let serviceResult = await updateUser(ctx.request.body.data);
    if (serviceResult) {
      ctx.status = 200;
      ctx.statusMessage = null;
    }
  };

  @put("/")
  @parameter("body", { $ref: UsersRequestSchema }, ENUM_PARAM_IN.body)
  @response(200, { $ref: BaseAPIResponseSchema })
  @response(400, { $ref: BaseAPIResponseSchema })
  @response(500, { $ref: BaseAPIResponseSchema })
  @tag("User")
  @description("Insert new user")
  @summary("Insert new user")
  public async insertUser(ctx: BaseContext): Promise<void> {
    let serviceResult = await insertUser(ctx.request.body.data);
    if (serviceResult) {
      ctx.status = 200;
      ctx.statusMessage = null;
    }
  };
}
