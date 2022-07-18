import { PaymentService } from "../../services/PaymentService";

export const checkoutPayment = (params) => {
  return PaymentService.checkout(params).then((result) => {
    return result;
  });
};

export const giftCardPayment = (params) => {
  return PaymentService.giftCardPayment(params).then((result) => {
    return result;
  });
};

export const checkPromoCode = (promoCode) => {
  return PaymentService.checkPromoCode(promoCode).then((response) => {
    return response;
  });
};
