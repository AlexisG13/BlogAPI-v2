import express from 'express';
import { getPosts, getSinglePost, createPost, deletePost, updatePost } from '../Services/posts';
import { commentRouter } from './commentRouter';
import { validateId, postValidator, updatePostValidator } from '../utils/validator';
import { tagsRouter } from './tagsRouter';

const router = express.Router();

//Comments router
router.use('/:id/comments', validateId, commentRouter);

//Tags router
router.use('/:id/tags', validateId, tagsRouter);

//Only post routes
router.get('/', async (req, res) => {
  const response = await getPosts();
  res.status(response.status).send(response.response);
});

router.get('/:id', validateId, async (req, res) => {
  const response = await getSinglePost(req.params.id);
  res.status(response.status).send(response.response);
});

router.post('/', postValidator, async (req, res) => {
  const response = await createPost(req.body);
  res.status(response.status).send(response.response);
});

router.delete('/:id', validateId, async (req, res) => {
  const response = await deletePost(req.params.id);
  res.status(response.status).send(response.response);
});

router.put('/:id', validateId, updatePostValidator, async (req, res) => {
  const response = await updatePost(req.body);
  res.status(response.status).send(response.response);
});

export const postRouter = router;
