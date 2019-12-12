import express from 'express';
import { postRouter } from './routes/postRouter';
import { dbConnection } from './database/connection';
const app = express();
app.use(express.json());
dbConnection();
app.use('/posts', postRouter);

app.listen(3000, () => {
  console.log('Server is on port 3000!');
});
