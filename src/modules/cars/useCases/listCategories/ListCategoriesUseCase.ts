import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }
  //aplicação do princípio da inversão de dependencias (DIP). Não entendi bem como funciona, mas parece que ele cria um constructor usando a classe do repositório

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    
    return categories;
  }
}

export { ListCategoriesUseCase };