import { Router } from "express"; 
//importa o Router do express que permite usar as rotas neste aquivo e depois exportar a variavel que recebe o Router(), assim todas as rotas são criadas aqui e invocadas no server.ts
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importUseCase";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp"
})

categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
    return listCategoriesController.handle(req, res);
})

categoriesRoutes.post("/import", upload.single("file"),(req, res) => {
  return importCategoryController.handle(req, res);
})

export { categoriesRoutes };