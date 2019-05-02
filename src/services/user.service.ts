import { IUser } from "./user.service.types";

export const getAllUsers = async (): Promise<IUser[]> => {
  return [
    {
      id: 1,
      login: "user1",
      email: "user1@mail.com",
      birthYear: 1993,
      gender: "male"
    },
    {
      id: 2,
      login: "user2",
      email: "user2@mail.com",
      gender: "female"
    },
    {
      id: 3,
      login: "user3",
      email: "user3@mail.com",
      birthYear: 2003
    },
    {
      id: 4,
      login: "user4",
      email: "user4@mail.com",
    }
  ];
};

export const updateUser = async (payload: IUser): Promise<boolean> => {
  return !!payload;
};

export const insertUser = async (payload: IUser): Promise<boolean> => {
  return !!payload;
};
