import { Category } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

// singleton: padrão de projetos que cria apenas uma instancia global
class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    create({ description, name}: ICreateCategoryDTO): void {
        const category = new Category(); 
    
        //Com o Object.assign() passamos para o objeto (primeiro parâmetro) todos os atributos no segundo parâmetro
        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })    
    
        this.categories.push(category);
    }

    //método list criado para retornar todas as categorias listadas.
    list(): Category[] {
        return this.categories;
    }

    // : Category {} diz que o objeto criado é do tipo Category
    findByName(name: string): Category {
        const category = this.categories.find((category) => category.name === name); // Se retirar os {} no corpo da arrow function não precisa escrever return, mas se manter os {} então precisa.
        return category;
    }
}

export { CategoriesRepository }