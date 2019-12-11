import {Request,Response} from 'express'
import { postModel } from '../database/postModel'
export function createPost(req:Request,res:Response){
  let post = new postModel({
      title:req.body.title,
      content:req.body.content
  });
  post.save();
  res.end('Se publico tu post :)')
}