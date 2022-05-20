import { API } from "./api";

export function getProducts( { query } ) {
    return API.get(`/search=${query}`);
}