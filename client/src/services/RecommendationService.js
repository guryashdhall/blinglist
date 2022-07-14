import { BACKEND_URL } from "../config/config";

const RecommendationService = {
  getSearchProducts: (searchQuery) => {
    const token = "jwt-token";

    return fetch(BACKEND_URL + `recommendation/recommend/${searchQuery}`, {
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

  getNewArrivalsProducts: () => {
    const token = "jwt-token";

    return fetch(BACKEND_URL + `recommendation/newarrivals`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("in service data " , data)
        return data;
      });
  },
}

export { RecommendationService };