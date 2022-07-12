import { AdminService } from "../../services/AdminService";

export const getProducts = () => {
  return AdminService.getProducts().then((products) => {
    return products;
  });
};

export const createProduct = (params) => {
  return AdminService.createProduct(params).then((result) => {
    return result;
  });
};

export const deleteProduct = (id) => {
  return AdminService.deleteProduct(id).then((result) => {
    console.log(result)
    return result;
  });
};