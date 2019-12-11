import express from 'express';
import { createPost } from '../controllers/post/createPost';
import { getPosts } from '../controllers/post/getPosts';
import { getSinglePost } from '../controllers/post/singlePostHandler';
import { deletePost } from '../controllers/post/deletePost';
import { updatePost } from '../controllers/post/updatePost';
import { postValidator } from '../validator/postValidator';
import { commentRouter } from './commentRouter';
import { updatePostValidator } from '../validator/updatePostValidator';

const router = express.Router(); 

//Comments router 
router.use('/:id/comments',commentRouter);

//Only post routes 
router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.post('/', postValidator, createPost);
router.delete('/:id', deletePost);
router.put('/:id',updatePostValidator,updatePost);

export const postRouter = router;
