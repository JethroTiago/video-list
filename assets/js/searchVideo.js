import { apiConect } from "./apiConect.js";

async function searchVideos() {
    const searchData = document.querySelector("[data-search]").value;
    const search = await apiConect.searchVideo(searchData);
}