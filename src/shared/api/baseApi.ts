import axios from "axios";

export const baseApi = axios.create(
    {
        baseURL: import.meta.env.VITE_APP_BASE_API_URL,
        headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
        },

    }
)