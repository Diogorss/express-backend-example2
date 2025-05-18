import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import routes from './routes/index.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

dotenv.config();
db.connect();

const app = express();

app.use(cors({
  origin: 'express-backend-example2.vercel.app', 
}));
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Exemplo',
      version: '1.0.0',
      description: 'API documentada com Swagger',
    },
  },
  apis: [path.join(__dirname, 'routes/*.js')], // Caminho absoluto
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.js',
    ],
  })
);

// Rotas da API
app.use('/api', routes);

// Health check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'online', version: '1.0.0' });
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor operando em http://localhost:${PORT}`);
  });
}

export default app;
