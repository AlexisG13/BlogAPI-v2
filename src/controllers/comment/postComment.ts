import { Request } from "express";
import { postModel } from "../../database/postModel";

export async function postComment(req:Request){
  const comment = {content:req.body.content,author:req.body.author};
  const newComment = postModel.findByIdAndUpdate(req.params.id,{$push:{comments:comment}});
  return newComment;
}