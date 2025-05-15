import express from 'express';
import userRoutes from './user.route.js';
import shoppingRoutes from './shopping.routes.js';
import swaggerRoute from '../config/swagger.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/shopping', shoppingRoutes); 
router.use('/swagger', swaggerRoute); 

export default router;