import express from 'express';
import { 
  create, 
  getAll, 
  getById, 
  update, 
  remove 
} from '../controller/shoppingList.js';
import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

// Middleware global para todas as rotas de shopping
router.use(verifyToken);

// Rotas CRUD
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.patch('/:id', update); 
router.delete('/:id', remove);

export default router;