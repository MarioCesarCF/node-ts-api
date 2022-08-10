import { Router } from "express"; 
//importa o Router do express que permite usar as rotas neste aquivo e depois exportar a variavel que recebe o Router(), assim todas as rotas são criadas aqui e invocadas no server.ts

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
    return listCategoriesController.handle(req, res);
})

export { categoriesRoutes };