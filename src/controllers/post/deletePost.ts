import { Request, Response } from "express";
import { postModel } from "../../database/postModel";

export async function deletePost(req:Request, res:Response) {
  const deletedPost = await postModel.findByIdAndDelete(req.params.id);
  //req.body.deletedPost = deletedPost;
}
