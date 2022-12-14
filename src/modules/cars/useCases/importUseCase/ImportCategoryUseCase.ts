import { parse } from "csv-parse";
import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategories {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  //essa parte toda ficou bem complicada de entender. Essa questão de colocar o tipo de 'tudo' é um pouco chata de lembrar. no loadCategories() os : vem seguido do tipo que no caso é Promise, mas o tipo da promise vem entre <> e é um array da classe IImportCategories.
  loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategories[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          })
        })
        .on("end", () => {
          fs.promises.unlink(file.path)
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(category => {
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    })
  }
}

export { ImportCategoryUseCase };