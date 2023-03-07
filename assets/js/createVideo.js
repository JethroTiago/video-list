const form = document.querySelector("[data-form]");

function createVideo(event) {
    event.preventDefault();
    const image = document.querySelector("[data-image]").value;
    const url = document.querySelector("[data-url]").value;
    const title = document.querySelector("[data-title]").value;
    const views = Math.floor(Math.random() * 10).toString();
}

form.addEventListener("submit", event => createVideo(event));