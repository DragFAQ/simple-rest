import { definition } from "koa-joi-swagger-ts";
import { UserSchema } from "./user.schema";

@definition("UsersRequest", "User data")
export class UsersRequestSchema {
  public data = UserSchema.required();
}
