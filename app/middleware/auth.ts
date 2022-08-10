import { NextFunction, Response } from "express";
import IUserRequest from '@common/Interfaces/IUserRequest.interface.js'
import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req: IUserRequest, res: Response, next: NextFunction) => {
  try {
    //@ts-ignore
    const token = req.headers.authorization.split(" ")[1];
    console.log(req.headers.authorization, "\n", token);
    // const isCustomAuth = token.length < 500;

    // let decodedData;

    // if (token && isCustomAuth) {      
    //   decodedData = jwt.verify(token, secret);
    //   req.userId = decodedData?.id;
    // } else {
    //   decodedData = jwt.decode(token);
    //   req.userId = decodedData?.sub;
    // }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;