import { get, patch, post } from "../utils/request";


export const addCart = async () => {
    const result = await post("cart/addCart.php");
    return result;
}

export const addProduct = async (option) => {
    const result = await post("cart/addProduct.php", option);
    return result;
}

export const deleteProduct = async (option) => {
    const result = await post("cart/deleteCart.php", option);
    return result;
}


export const getCart = async (id) => {
    const result = await get(`cart/detail.php?cartId=${id}`);
    return result;
}


export const changeQuantity = async (option) => {
    const result = patch("cart/change-quantity.php", option)
    return result;
}