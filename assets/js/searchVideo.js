import { apiConect } from "./apiConect.js";
import buildCards from "./showVideos.js";

async function searchVideos(e) {
    e.preventDefault();
    const searchData = document.querySelector("[data-search]").value;
    const search = await apiConect.searchVideo(searchData);

    console.log(search);
}

const searchButton = document.querySelector("[data-search-button]");

searchButton.addEventListener("click", e => searchVideos(e))