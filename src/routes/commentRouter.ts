import express from 'express';
import { getAllComments, deleteComment, postComment, updateComment } from '../Services/comments';
import { validateComment } from '../utils/validator';
const router = express.Router();

router.get('/', async (req, res) => {
  const response = await getAllComments(req.body.id);
  res.status(response.status).send(response.response);
});

router.post('/', validateComment, async (req, res) => {
  const response = await postComment(req.body.id, req.body.comment);
  res.status(response.status).send(response.response);
});

router.put('/:commentId', validateComment, async (req, res) => {
  const response = await updateComment(req.body.id, req.params.commentId, req.body.content);
  res.status(response.status).send(response.response);
});

router.delete('/:commentId', async (req, res) => {
  const response = await deleteComment(req.body.id, req.params.commentId);
  res.status(response.status).send(response.response);
});

export const commentRouter = router;
