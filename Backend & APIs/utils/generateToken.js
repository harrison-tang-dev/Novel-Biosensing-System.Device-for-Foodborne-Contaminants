import jwt from "jsonwebtoken";
import crypto from "node:crypto";


export const generateAccessToken = async (payload, secretKey, options) => {
  return jwt.sign(payload, secretKey, options);
};

export const generateRefreshToken = async (
  payload,
  refreshTokensecret,
  options
) => {
  return jwt.sign(payload, refreshTokensecret, options);
};


export const verifyJWT = async (payload, secretKey, options) => {
  return jwt.verify(payload, secretKey);
}