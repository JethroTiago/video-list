import { apiConect } from "./apiConect.js";
import buildCards from "./showVideos.js";

async function searchVideos(event) {
    event.preventDefault();
    const searchData = document.querySelector("[data-search]").value;
    const search = await apiConect.searchVideo(searchData);

    const list = document.querySelector("[data-list]");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(
        buildCards(element.title, element.views, element.url, element.image)));

        if (search.length == 0) {
            list.innerHTML = `<h2 class="mensage__title">No video was found with these terms<h2/>`
        }
}

const searchButton = document.querySelector("[data-search-button]");

searchButton.addEventListener("click", e => searchVideos(e))