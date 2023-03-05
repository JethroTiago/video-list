async function videoList() {
    const conection = await fetch("http://localhost:3000/videos");
    const convertedConection = await conection.json();
    
    return convertedConection;
};

async function createVideo(title, views, url, image) {
    const conection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            views: `${views} visualizações`,
            url: url,
            image: image
        })
    });

    const convertedConection = await conection.json();

    return convertedConection;
}

export const apiConect = {
    videoList,
    createVideo,
};