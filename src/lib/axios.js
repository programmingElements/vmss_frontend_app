import axios from "axios";

const api = axios.create({
    baseURL: "https://vmss-backend-app.onrender.com/api",
});

export default api;