import axios from "axios";

const API = axios.create({
	baseURL: "https://api.mercadolibre.com/sites/MLA/",
	timeout: 5000,
});

export { API };