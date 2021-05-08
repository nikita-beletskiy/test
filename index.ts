import express from 'express';

import { errorHandler } from './error-handler';

import { signupRouter } from './signup';
import { updateAccountRouter } from './update';

const app = express();

app.use(express.json());

app.use(signupRouter);
app.use(updateAccountRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
