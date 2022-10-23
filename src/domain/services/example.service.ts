import { IExampleRepository } from "../interfaces/example.interface";
import type { Example } from "../models/example.model";

export default class ExampleService {
  private static exampleRepository: IExampleRepository;
  
  //public: El método es público. Cualquier clase con acceso a UserService puede llamarlo
  //static: El método es estático. Que un miembro de una clase sea estático quiere decir que todas las instancias de esa clase comparten ese miembro en concreto. Si una lo modifica, el cambio lo ven todas las instancias.

  public static getAll() {
    return this.exampleRepository.getAll();
  };
  
  public static getById(id: number) {
    return this.exampleRepository.getById(id);
  };
  
  public static update(example: Example) {
    return this.exampleRepository.update(example);
  };
  
  public static create(example: Example) {
    return this.exampleRepository.create(example);
  };
  
  public static _delete(example: Example) {
    return this.exampleRepository.delete(example);
  };
}
