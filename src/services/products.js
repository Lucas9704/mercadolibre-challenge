import { API } from "./api";

export function getProducts( ) {
    return API.get(`/search?q=:query`);
}