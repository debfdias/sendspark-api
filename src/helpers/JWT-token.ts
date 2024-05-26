import JWT from "jsonwebtoken";

export const generateJWT = (data: object) => {
  return JWT.sign(data, "potatoes");
};

export const verifyJWT = (token: string) => {
  return JWT.verify(token, "potatoes");
};
