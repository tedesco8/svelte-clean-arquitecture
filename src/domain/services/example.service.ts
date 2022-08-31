import { exampleRepository } from "../../infrastructure/repositories/example.repository";
import type { Example } from "../models/example.model";

const getAll = () => {
  return exampleRepository.getAll();
};

const getById = (id: number) => {
  return exampleRepository.getById(id);
};

const update = (example: Example) => {
  return exampleRepository.update(example);
};

const create = (example: Example) => {
  return exampleRepository.create(example);
};

const _delete = (example: Example) => {
  return exampleRepository.delete(example);
};

export default {
  getAll,
  getById,
  update,
  create,
  _delete,
};
