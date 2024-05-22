import { Request, Response } from "express";
import { generateJWT } from "../helpers/JWT-token";
import { createUser, getUserByEmail } from "../services/user-service";

// register route - Register a new user

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  if (email && password) {
    const hasUser = await getUserByEmail(email);
    if (!hasUser) {
      const newUser = await createUser(email, password, name);
      const token = generateJWT({ id: newUser.id, email: newUser.email });

      return res
        .status(201)
        .json({ id: newUser.id, email: newUser.email, token });
    }
    return res.json({ error: "Email already taken." });
  }
  return res.json({ error: "Fill required fields." });
};
