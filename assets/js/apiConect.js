async function videoList() {
    const conection = await fetch("http://localhost:3000/videos");
    const convertedConection = await conection.json();
    
    return convertedConection;
};

export const apiConect = {
    videoList
};