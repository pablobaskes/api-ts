import { generateChatResponse } from "../services/gpt.services";
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
async function handleChat(req: Request, res: Response) {
  try {
    const message = req.body.message;

    const response = await generateChatResponse(message);

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (e) {
    handleHttp(res, "ERROR_CREATING_COMPLETION", e);
  }
}
export { handleChat };
