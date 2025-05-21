import { get, patch, post } from "../utils/request";


export const getBanners = async () => {
    const result = await get("banners");
    return result;
}