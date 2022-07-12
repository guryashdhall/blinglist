import { BACKEND_URL } from "../config/config";

const AdminService = {
  getProducts: () => {
    const token = "jwt-token";

    return fetch(BACKEND_URL + "administration/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  },


  createProduct: (params) => {
    const token = "jwt-token";
    console.log("create product");

    return fetch(BACKEND_URL + "administration/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  },
};

export { AdminService };
