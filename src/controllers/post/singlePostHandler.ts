import { Request, Response } from "express";
import { postModel } from "../../database/postModel";

export async function getSinglePost(req:Request,res:Response){
  const post = await postModel.findById(req.params.id);
  return post; 
}