import { Response } from "express";
const handleHttp = (res: Response, error: string, e: unknown) => {
  console.log(e)
  res.status(500);
  res.send({ error });
  
};
export default handleHttp;
