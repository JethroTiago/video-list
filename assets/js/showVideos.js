import { apiConect } from "./apiConect.js";

const list = document.querySelector("[data-list]");

function buildCards(title, views, url, image) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}" 
        title="${title}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
        <div class="video-description">
            <img src="${image}" alt="Beira da aventura channel logo">
            <h3>${title}</h3>
            <p>${views}</p>
        </div>
    `
    return video;
};

async function videoList() {
    const apiList = await apiConect.videoList();
    apiList.forEach(element => list.appendChild(
        buildCards(element.title, element.views, element.url, element.image)))
};