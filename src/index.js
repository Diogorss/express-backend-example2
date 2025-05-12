import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import routes from './routes/index.js'; 

dotenv.config();
db.connect();

const app = express();

// Middlewares essenciais
app.use(express.json());

// Rotas centralizadas
app.use('/api', routes); 

// Rota raiz para health check
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'online',
    version: '1.0.0'
  });
});


const PORT = process.env.PORT || 3000;


const startServer = () => {
  app.listen(PORT, () => {
    console.log(` Servidor operando em http://localhost:${PORT}`);
  });
};


if (process.env.NODE_ENV !== 'test') {
  startServer();
}

export default app; 