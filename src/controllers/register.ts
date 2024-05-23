import { Request, Response } from "express";
import { generateJWT } from "../helpers/JWT-token";
import { createUser, getUserByEmail } from "../services/user-service";

// register route - Register a new user

export const register = async (req: Request, res: Response) => {
  const { email, password, name, jobTitle, company } = req.body;

  const hasUser = await getUserByEmail(email);

  if (!hasUser) {
    try {
      const newUser = await createUser(
        email,
        password,
        name,
        jobTitle,
        company
      );
      const token = generateJWT({ id: newUser.id, email: newUser.email });

      return res
        .status(201)
        .json({ id: newUser.id, email: newUser.email, token });
    } catch (e) {
      return res.status(500).json({ message: "Internal error" });
    }
  }
  return res.status(500).json({ message: "Email already taken." });
};
