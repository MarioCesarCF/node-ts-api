import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json()); //necessário para ler as informações do body em formato json ou algo assim

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log('Acesso a porta 3333.'));