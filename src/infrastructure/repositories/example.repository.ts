import { http } from "../http/http";

import type { IExampleRepository } from "../../domain/interfaces/repositories/exampleRepository.interface";

export default class ExampleRepository implements IExampleRepository {
  async getAll() {
    try {
      return await http.get<any>(
        `http://localhost:3000/api/example`,
        false //No public endpoint
      );
    } catch (err) {
      throw new Error(err);
    }
  }
  async getById(id: number) {
    try {
      return await http.get<any>(
        `http://localhost:3000/api/example/${id}`,
        false //No public endpoint
      );
    } catch (err) {
      throw new Error(err);
    }
  }
  async create(example: any) {
    try {
      let body = JSON.stringify(example);
      return await http.post(`http://localhost:3000/api/example`, body, false);
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(example: any) {
    try {
      let body = JSON.stringify(example);
      return await http.put(`http://localhost:3000/api/example`, body, false);
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(example: any) {
    try {
      let body = JSON.stringify(example);
      return await http.delete(
        `http://localhost:3000/api/example`,
        body,
        false
      );
    } catch (err) {
      throw new Error(err);
    }
  }
}
