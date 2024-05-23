import { Request, Response } from "express";
import { getAllUsers } from "../services/user-service";

export const list = async (req: Request, res: Response) => {
  let users = await getAllUsers();

  if (users) {
    return res.status(200).json({
      users: users.map((user) => {
        return {
          name: user.name,
          email: user.email,
        };
      }),
    });
  }

  return res.status(404).json({ message: "No users found." });
};
