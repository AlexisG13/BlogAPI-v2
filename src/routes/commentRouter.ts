import express from 'express';
import { getAllComments, deleteComment, postComment, updateComment } from '../Services/comments';
import { validateComment, validateId, updateCommentValidator } from '../utils/validator';
const router = express.Router();

router.get('/', async (req, res) => {
  const response = await getAllComments(req.body.idArray[0]);
  res.status(response.status).send(response.response);
});

router.post('/', validateComment, async (req, res) => {
  const response = await postComment(req.body.idArray[0], req.body.comment);
  res.status(response.status).send(response.response);
});

router.put('/:id', validateId, updateCommentValidator, async (req, res) => {
  const response = await updateComment(req.body.idArray[0], req.body.idArray[1], req.body.content);
  res.status(response.status).send(response.response);
});

router.delete('/:id', validateId, async (req, res) => {
  const response = await deleteComment(req.body.idArray[0], req.body.idArray[1]);
  res.status(response.status).send(response.response);
});

export const commentRouter = router;
