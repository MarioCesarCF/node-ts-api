import { Router } from "express"; 
//importa o Router do express que permite usar as rotas neste aquivo e depois exportar a variavel que recebe o Router(), assim todas as rotas são criadas aqui e invocadas no server.ts

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body;
    
    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name, description });

    return res.status(201).send(); //usando json no lugar do send serve para vermos o que está sendo enviado quando a função tem esse tipo de retorno
});

categoriesRoutes.get('/', (req, res) => {
    const all = categoriesRepository.list();

    return res.json(all)
})

export { categoriesRoutes };