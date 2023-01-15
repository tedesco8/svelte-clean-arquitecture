
import { ExampleRepository } from "../bridge";

import ExampleFactory from "../../domain/factory/example.factory";

import type { IExampleRepository } from "../../domain/interfaces/repositories/exampleRepository.interface";
import type { Example } from "../../domain/types/example.type";
import type { Callbacks } from "../../domain/types/common.type";

export default class ExampleService {
  private exampleRepository: IExampleRepository = new ExampleRepository();

  public getAll(callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      const res: any = this.exampleRepository.getAll();
      onSuccess(res);
    } catch (error: any) {
      onError(error);
    }
  }

  public getById(id: number, callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      const res: any = this.exampleRepository.getById(id);
      const newExample = ExampleFactory.createExample(res.id, res.firstName, res.legalName, res.middleName, res.paternalSurname, res.maternalSurname);
      onSuccess(newExample);
    } catch (error: any) {
      onError(error);
    }
  }

  public update(example: Example, callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      const res: any = this.exampleRepository.update(example);
      onSuccess(res);
    } catch (error: any) {
      onError(error);
    }
  }

  public create(example: Example, callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      const res: any = this.exampleRepository.create(example);
      onSuccess(res);
    } catch (error: any) {
      onError(error);
    }
  }

  public _delete(example: Example, callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;
    try {
      const res: any = this.exampleRepository.delete(example);
      onSuccess(res);
    } catch (error: any) {
      onError(error);
    }
  }
}
