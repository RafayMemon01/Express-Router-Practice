import express, { Router } from 'express';
const router = express.Router();


import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import feedRouter from './routes/feed.mjs'
import postRouter from './routes/post.mjs'

router.use(authRouter)
router.use( commentRouter)
router.use( postRouter)
router.use( feedRouter)

export default router;
