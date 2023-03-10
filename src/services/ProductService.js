import api from "../http-common";

const getAll = () => {
  return api.get("/products");
};

const get = id => {
  return api.get(`/products/${id}`);
};

const create = data => {
  return api.post("/products", data);
};

const update = (id, data) => {
  return api.put(`/products/${id}`, data);
};

const remove = id => {
  return api.delete(`/products/${id}`);
};

const removeAll = () => {
  return api.delete(`/products`);
};

const findByTitle = title => {
  return api.get(`/products?title=${title}`);
};

const ProductService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ProductService;
