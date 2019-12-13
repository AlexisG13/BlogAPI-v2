import express from 'express';
import { addTag, deleteTag, getAllTags, updateTag } from '../Services/tags';
const router = express.Router();

router.get('/', async (req, res) => {
  const result = await getAllTags(req.body.idArray[0]);
  res.status(result.status).send(result.response);
});

router.post('/', async (req, res) => {
  const result = await addTag(req.body.idArray[0], req.body.tag);
  res.status(result.status).send(result.response);
});

router.delete('/:tagName', async (req, res) => {
  const result = await deleteTag(req.body.idArray[0], req.params.tagName);
  res.status(result.status).send(result.response);
});

router.put('/:tagName', async (req, res) => {
  const result = await updateTag(req.body.idArray[0], req.params.tagName, req.body.tag);
  res.status(result.status).send(result.response);
});

export const tagsRouter = router;
