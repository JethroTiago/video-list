async function videoList() {
    const conection = await fetch("http://localhost:3000/videos");
    console.log(conection);
};

videoList();