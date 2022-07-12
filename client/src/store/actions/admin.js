import { AdminService } from "../../services/AdminService";

export const createProduct = (params) => {
  return AdminService.createProduct(params).then((result) => {
    return result;
  });
};
