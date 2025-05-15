import { serve, setup } from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import express from "express";
const router = express.Router();


const swaggerOptions = {
definition: {
openapi: "3.0.0",
info: {
title: "API de Exemplo",
version: "1.0.0",
description: "API documentada com Swagger",
},
},
apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
router.use("/docs", serve, setup(swaggerDocs));
export default router;

