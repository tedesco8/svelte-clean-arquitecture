import { http } from "../http/http";

export const exampleRepository = {
  getAll: async () => {
    return await http.get<any>(
      `http://localhost:3000/api/example`,
      false //No public endpoint
    );
  },
  getById: async (id: number) => {
    return await http.get<any>(
      `http://localhost:3000/api/example/${id}`,
      false //No public endpoint
    );
  },
  create: async (example: any) => {
    let body = JSON.stringify(example);
    return await http.post(`http://localhost:3000/api/example`, body, false);
  },

  update: async (example: any) => {
    let body = JSON.stringify(example);
    return await http.put(`http://localhost:3000/api/example`, body, false);
  },

  delete: async (example: any) => {
    let body = JSON.stringify(example);
    return await http.delete(`http://localhost:3000/api/example`, body, false);
  },
};
