import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import dreamsRouter from './routes/dream.route';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/dreams', dreamsRouter);

const port = 3000;

export const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
