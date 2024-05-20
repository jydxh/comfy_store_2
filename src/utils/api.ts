import axios from "axios";

const baseUrl = "https://strapi-store-server.onrender.com/api";

export const customeFetch = axios.create({
	baseURL: baseUrl,
});
