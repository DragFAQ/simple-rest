export interface IUser {
  id: number;
  login: string;
  email: string;
  birthYear?: number;
  gender?: "male" | "female";
}
