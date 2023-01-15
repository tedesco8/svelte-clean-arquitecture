import type { IExample } from "../interfaces/example.interface";

export class Example implements IExample {
  id: number;
  firstName: string;
  legalName: string;
  middleName: string;
  paternalSurname: string;
  maternalSurname: string;
  constructor(id:number,firstName:string,legalName:string,middleName:string,paternalSurname:string,maternalSurname:string) {
      this.id = id;
      this.firstName = firstName;
      this.legalName = legalName;
      this.middleName = middleName;
      this.paternalSurname = paternalSurname;
      this.maternalSurname = maternalSurname;
  }
}
