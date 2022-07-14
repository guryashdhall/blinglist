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
}

export { RecommendationService };