import { get, patch, post } from "../utils/request";

export const getRoleList = async () => {
    const result = await get("roles/read.php");
    return result;
}

export const createRole = async (option) => {
    const result = await post("roles/create.php",option);
    return result;
}

export const deleteRole = async (option) => {
    const result = patch(`roles/delete.php`, option)
    return result;
}

export const UpdatePermissions = async (option) => {
    const result = patch(`roles/permissions.php`, option)
    return result;
}
