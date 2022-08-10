import { ICategoriesRepository } from "../repositories/ICategoriesRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
//aplicação do princípio da inversão de dependencias (DIP). Não entendi bem como funciona, mas parece que ele cria um constructor usando a classe do repositório

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            //dispara a msg de erro
            throw new Error('Category alreads existis!');
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService }