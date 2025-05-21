import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import routes from './routes/index.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';
// Removida a importação do cors, pois usaremos middleware personalizado

dotenv.config();

// Validação de variáveis de ambiente
if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME || !process.env.JWT_SECRET) {
  console.error('Variáveis de ambiente obrigatórias não configuradas');
  console.error(`MONGO_URI: ${process.env.MONGO_URI ? 'Configurado' : 'Não configurado'}`);
  console.error(`MONGO_DB_NAME: ${process.env.MONGO_DB_NAME ? 'Configurado' : 'Não configurado'}`);
  console.error(`JWT_SECRET: ${process.env.JWT_SECRET ? 'Configurado' : 'Não configurado'}`);
  process.exit(1);
}

// Conectar ao banco de dados
db.connect();

const app = express();

// Middleware CORS personalizado e robusto para ambiente serverless
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  // Responder imediatamente às solicitações OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Outros middlewares
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
  } )
);

// Middleware para tratamento de erros global
app.use((err, req, res, next) => {
  console.error('Erro global:', err);
  res.status(500).json({ message: 'Erro interno do servidor', error: err.message });
});

// Rotas da API
app.use('/api', routes);

// Health check
app.get('/', (req, res) => {
  res.status(200).json({ status: 'online', version: '1.0.0' });
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor operando em http://localhost:${PORT}` );
  });
}

export default app;
