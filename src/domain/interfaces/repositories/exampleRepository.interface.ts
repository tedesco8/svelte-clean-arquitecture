export interface IExampleRepository {
    getAll(): any;
    getById(id: number): any;
    create(example: any): any;
    update(example: any): any;
    delete(example: any): any;
  }
  