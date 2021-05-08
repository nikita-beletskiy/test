import { db } from './db';
import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from './validate-request';

const router = Router();
router.post(
  '/api/users/signup',
  [
    body('email').custom(async email => {
      if (
        (await db.query(`SELECT id FROM users WHERE email = $1`, [email]))
          .rows[0]
      )
        throw new Error(`Account exists`);
    })
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    res.send('hello');
  }
);

export { router as signupRouter };
