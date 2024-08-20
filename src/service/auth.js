import { post } from "../utils/request";



export const login = async (option) => {
    const result = await post("auth/login.php",option);
    return result;
}
