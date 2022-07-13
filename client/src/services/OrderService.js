import { BACKEND_URL } from "../config/config";

const OrderService = {

    getOrders: () => {
        // const token = localStorage.getItem("token");
        const token = "jwt-token";
        console.log("getorders");

        return fetch(BACKEND_URL + "previousorders", {
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

    getOrder: (id) => {
        const token = "jwt-token";
        console.log("getorder");

        return fetch(BACKEND_URL + `orderdetails/${id}`, {
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

    editOrder: (id) => {
        //const token = localStorage.getItem("token");
        const token = "jwt-token";
        console.log("editorders");

        return fetch(BACKEND_URL + `previousorders/${id}`, {
            method: "PATCH",
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
};

export { OrderService };
