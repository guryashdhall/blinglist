import { OrderService } from "../../services/OrderService";

export const getOrders = () => {
    return OrderService.getOrders().then((orders) => {
        return orders;
    });
};

export const getOrder = (id) => {
    return OrderService.getOrder(id).then((order) => {
        return order;
    });
};

export const editOrder = (id) => {
    return OrderService.editOrder(id).then((result) => {
        return result;
    });
};