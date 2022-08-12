import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerFile from "./swagger.json";
import { router } from './routes';

const app = express();

app.use(express.json()); //necessário para ler as informações do body em formato json ou algo assim

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.listen(3333, () => console.log('Acesso a porta 3333.'));