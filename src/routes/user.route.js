import express from 'express';
import userController from '../controller/user.controller.js'; 

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API para gerenciamento de usuários
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso.
 *       400:
 *         description: Erro na requisição.
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Faz login de um usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login realizado com sucesso.
 *       401:
 *         description: Credenciais inválidas.
 */
router.post ('/register', userController.register);
router.post('/login', userController.login);
export default router;