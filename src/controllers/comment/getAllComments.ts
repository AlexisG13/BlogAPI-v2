import { Request, Response } from "express";
import { postModel } from "../../database/postModel";

export async function getAllComments(req:Request,res:Response){
  const comments = await postModel.findById(req.params.id).select('post.comments');
  return comments;
}