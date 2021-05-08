import { db } from './db';
import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from './validate-request';

const router = Router();
router.patch(
  '/api/users/update',
  [
    body(['email', 'first_name', 'last_name']).custom(
      async (value, { path }) => {
        if (
          (
            await db.query(
              `SELECT ${path} FROM users WHERE ${path} = $1 AND id NOT IN ($2)`,
              [value, '0763855e-6cfa-45cd-b66c-00425a483b0c']
            )
          ).rows[0]
        )
          throw new Error(
            path === 'email'
              ? `Email error`
              : path === 'first_name'
              ? `First name error`
              : `Last name error`
          );
      }
    )
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.send('update');
  }
);

export { router as updateAccountRouter };
