import { BACKEND_URL } from "../config/config";

const PaymentService = {
  checkout: (params) => {
    // const token = localStorage.getItem("token");
    const token = "jwt-token";
    console.log("Payment");

    return fetch(BACKEND_URL + "checkout/payment", {
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

export { PaymentService };
