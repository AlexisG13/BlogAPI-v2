import express from 'express';
import { getAllComments } from '../controllers/comment/getAllComments';
const router = express.Router();

router.get('/', getAllComments);
//router.get('/:id' /*,getSingleComment*/); ????
//router.post('/',postComment);
//router.put('/:id',updateComment);
//router.delete('/:id',deleteComment);

export const commentRouter = router;
