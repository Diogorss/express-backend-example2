import express from 'express';
import userRoutes from './user.route.js';
import shoppingRoutes from './shopping.routes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/shopping', shoppingRoutes); 

export default router;