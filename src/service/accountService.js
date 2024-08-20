import { get, patch, post } from "../utils/request";


export const createAccount = async (option) => {
    const result = await post("account/create.php",option);
    return result;
}

export const getAccountList = async () => {
    const result = await get("account/read.php");
    return result;
}

export const getAccountDetail = async (id) => {
    const result = await get(`account/detail.php?id=${id}`);
    return result;
}

export const deleteAccount = async (option) => {
    const result = patch(`account/delete.php`, option)
    return result;
}

export const editAccount = async (id, option) => {
    const result = patch(`account/edit.php?id=${id}`, option)
    return result;
}

export const changeStatus = async (id, option) => {
    const result = patch(`account/change-status.php?id=${id}`, option)
    return result;
}

export const userInfo = async (option) => {
    const result = await post("account/infoUser.php",option);
    return result;
}