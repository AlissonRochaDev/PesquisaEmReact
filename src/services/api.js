// Importante o Axios!
import axios from "axios";

// Referencia de URL
// https://viacep.com.br/ws/86015640/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

// Exportanto a API para uso da aplicação!
export default api;