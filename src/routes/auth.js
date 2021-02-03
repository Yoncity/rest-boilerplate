import express from 'express';
import Controller from '../controllers';
import { asyncHandler } from '../middlewares';

const router = express.Router();

router
  .route('/auth/signup')
  .post(asyncHandler(Controller.Auth.signUp));

export default router;
