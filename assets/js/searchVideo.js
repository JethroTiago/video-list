import { apiConect } from "./apiConect.js";
import buildCards from "./showVideos.js";

async function searchVideos(event) {
    event.preventDefault();
    const searchData = document.querySelector("[data-search]").value;
    const search = await apiConect.searchVideo(searchData);

    const list = document.querySelector("[data-list]");
    busca.forEach(element => list.appendChild(
        buildCards(element.title, element.views, element.url, element.image)));
}

const searchButton = document.querySelector("[data-search-button]");

searchButton.addEventListener("click", e => searchVideos(e))