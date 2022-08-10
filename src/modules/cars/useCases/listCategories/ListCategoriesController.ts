import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

//pesquisar por que o constructor tem de ser private
class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listCategoryUseCase.execute();

    return res.json(all)
  }
}

export { ListCategoriesController };