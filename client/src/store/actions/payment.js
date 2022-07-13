import { PaymentService } from "../../services/PaymentService";

export const checkoutPayment = (params) => {
  return PaymentService.checkout(params).then((result) => {
    return result;
  });
};
