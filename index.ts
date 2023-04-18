import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});