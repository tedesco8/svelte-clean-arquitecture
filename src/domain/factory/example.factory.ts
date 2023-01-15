import type { IExample } from "../interfaces/example.interface";
import { Example } from "../models/example.model";

export default class ExampleFactory {
  public static createExample(id:number,firstName:string,legalName:string,middleName:string,paternalSurname:string,maternalSurname:string): IExample {
    return new Example(id,firstName,legalName,middleName,paternalSurname,maternalSurname);
  }
}
