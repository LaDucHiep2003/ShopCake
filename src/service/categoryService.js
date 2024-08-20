import { get, patch, post } from "../utils/request";

export const getCategoryList = async () => {
    const result = await get("category/read.php");
    return result;
}

export const getCategoryDetail = async (id) => {
    const result = await get(`category/detail.php?id=${id}`);
    return result;
}

export const editCategory = async (id,option) => {
    const result = await post(`category/edit.php?id=${id}`, option);
    return result;
}

export const getCategoryListSort = async (sort, value) => {
    const result = await get(`category/read.php?sort=${sort}&value=${value}`);
    return result;
}

export const deleteCategory = async (option) => {
    const result = patch(`category/delete.php`, option)
    return result;
}

export const changeStatus = async (id, option) => {
    const result = patch(`category/change-status.php?id=${id}`, option)
    return result;
}

export const createCategory = async (option) => {
    const result = await post("category/create.php",option);
    return result;
}