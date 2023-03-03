import { apiConect } from "./apiConect.js";

const list = document.querySelector("[data-list]");

function buildCards() {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
        <iframe width="100%" height="72%" src="https://www.youtube.com/embed/DnxNKANULuU" 
        title="AMANTIKIR - CAMPOS DO JORDÃO - Beira da Aventura - Episódio 02" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
        <div class="video-description">
            <img src="./assets/img/beiralogo.png" alt="Beira da aventura channel logo">
            <h3>AMANTIKIR - CAMPOS DO JORDÃO - Beira da Aventura - Episódio 02</h3>
            <p>316 visualizações</p>
        </div>
    `
    return video;
};