import { http } from "../http/http";

import type { IExampleRepository } from "../../domain/interfaces/example.interface";

export default class ExampleRepository implements IExampleRepository {
  async getAll() {
    return await http.get<any>(
      `http://localhost:3000/api/example`,
      false //No public endpoint
    );
  }
  async getById(id: number) {
    return await http.get<any>(
      `http://localhost:3000/api/example/${id}`,
      false //No public endpoint
    );
  }
  async create(example: any) {
    let body = JSON.stringify(example);
    return await http.post(`http://localhost:3000/api/example`, body, false);
  }

  async update(example: any) {
    let body = JSON.stringify(example);
    return await http.put(`http://localhost:3000/api/example`, body, false);
  }

  async delete(example: any) {
    let body = JSON.stringify(example);
    return await http.delete(`http://localhost:3000/api/example`, body, false);
  }
}
