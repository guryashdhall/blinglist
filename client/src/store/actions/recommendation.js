import { RecommendationService } from "../../services/RecommendationService";

export const getSearchProducts = (searchQuery) => {
  return RecommendationService.getSearchProducts(searchQuery).then((searchProducts) => {
    return searchProducts;
  });
};