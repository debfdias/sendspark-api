import { encryptPassword } from "../helpers/bcrypt-password";
import { db } from "../libs/prisma";

export const createUser = async (
  email: string,
  password: string,
  name: string
) => {
  return await db.user.create({
    data: {
      name,
      email,
      password: encryptPassword(password, 10),
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return await db.user.findUnique({
    where: {
      email,
    },
  });
};

export const deleteUserById = async (id: number) => {
  return await db.user.findUnique({
    where: {
      id,
    },
  });
};

export const getAllUsers = async () => {
  return await db.user.findMany();
};
