import express from 'express';
const app = express();

app.get('/posts', (req, res) => {});

app.post('/posts', (req, res) => {
  const requestBody = req.body;
});

app.delete('/posts', (req, res) => {});

app.put('/posts', (req, res) => {});
