import { postChatBot } from "../utils/request";

export const chatBot = async (option) => {
    const result = await postChatBot("api",option);
    return result;
}