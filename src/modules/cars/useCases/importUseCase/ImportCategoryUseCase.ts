import { parse } from "csv-parse";
import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategories {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);

    const parseFile = parse();

    stream.pipe(parseFile);

    parseFile.on('data', async line => {
      console.log(line)
    })
  }

  execute(file: Express.Multer.File): void {    
    
  }
}

export { ImportCategoryUseCase };