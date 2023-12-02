import axios from "axios";

export const baseApi = axios.create(
    {
        baseURL: "https://wttonline.ru/api/",
        headers: {
            Accept: "application/json"
        },

    }
)