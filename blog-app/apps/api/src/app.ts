import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello there');
});

export default app;