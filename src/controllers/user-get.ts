import { Request, Response } from "express";
import { getUserByEmail } from "../services/user-service";

export const getUser = async (req: Request, res: Response) => {
  let user = await getUserByEmail(req.params.email);

  if (user) {
    return res.status(200).json(user);
  }

  return res.status(404).json({ message: "No users found." });
};
