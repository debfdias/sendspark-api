import { Request, Response } from "express";
import { generateJWT } from "../helpers/JWT-token";
import { decryptPassword } from "../helpers/bcrypt-password";
import { getUserByEmail } from "../services/user-service";

// login route - Login the user

export const login = async (req: Request, res: Response) => {
  let { email, password } = req.body;
  if (email && password) {
    let user = await getUserByEmail(email);

    if (user && (await decryptPassword(password, user.password))) {
      const token = generateJWT({ id: user.id, email: user.email });

      const data = {
        status: true,
        token,
      };

      return res.status(200).send(data);
    }
    return res.status(500).send({ message: "Invalid credentials." });
  }
  return res.json({ message: "Fill required fields.", status: false });
};
