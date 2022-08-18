import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Response, Request } from "express";

class CreateCategoryController {
constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  //todo usecase tera apenas um controller e seguirá esse padrão de usar o handle
  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    
    this.createCategoryUseCase.execute({ name, description });

    return res.status(201).send(); //usando json no lugar do send serve para vermos o que está sendo enviado quando a função tem esse tipo de retorno
  }
}

export { CreateCategoryController }