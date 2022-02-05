for (let i = 1; i <= 5; i++) {
    let img = document.createElement('img');
    fetch(`https://picsum.photos/200/300?random=1`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        img.id = i
        img.src = response.url;
        document.getElementById("images").appendChild(img);
    }).catch((error) => {
        console.log("error", error);
    });

}

// GET - Return data
// POST - Create data
// PUT - Update data
// DELETE - Delete data