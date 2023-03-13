import { apiConect } from "./apiConect.js";
const form = document.querySelector("[data-form]");

async function createVideo(event) {
    event.preventDefault();
    const image = document.querySelector("[data-image]").value;
    const url = document.querySelector("[data-url]").value;
    const title = document.querySelector("[data-title]").value;
    const views = Math.floor(Math.random() * 10).toString();
try {
    await apiConect.createVideo(title, views, url, image)

    window.location.href = "./assets/pages/send-completed.html";
    } catch (e) {
        alert(e);
    }
}

form.addEventListener("submit", event => createVideo(event));