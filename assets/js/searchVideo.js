import { apiConect } from "./apiConect.js";

async function searchVideos() {
    const searchData = document.querySelector("[data-search]");
    const search = await apiConect.searchVideo(searchData);
}