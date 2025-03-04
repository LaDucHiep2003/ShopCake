import { get, patch, post } from "../utils/request";

export const checkout = async (option) =>{
    const result = await post("order/checkout", option);
    return result;
}
export const getCheckout = async (id) => {
    const result = await get(`order/${id}`);
    return result;
}

export const getOrderList = async () => {
    const result = await get("checkout/read.php");
    return result;
}

export const getOrderListConfirmed = async () => {
    const result = await get("checkout/confirmed.php");
    return result;
}

export const confirmOrder = async (option) => {
    const result = await patch("checkout/confirmOrder.php", option);
    return result;
}