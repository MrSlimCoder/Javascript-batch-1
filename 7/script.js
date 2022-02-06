let parentDiv;

window.onload = () => {
    //write your code here
    parentDiv = document.createElement('div');
    parentDiv.id = "container";
    document.body.appendChild(parentDiv);
}

for (let i = 1; i <= 5; i++) {
    let childDiv = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = "hello world";
    let img = document.createElement('img');
    fetch(`https://picsum.photos/200/300?random=1`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        childDiv.id = `div - ${i}`;
        img.id = i
        img.src = response.url;
        childDiv.appendChild(p);
        childDiv.appendChild(img);
        parentDiv.appendChild(childDiv);
    }).catch((error) => {
        console.log("error", error);
    });
}

// GET - Return data
// POST - Create data
// PUT - Update data
// DELETE - Delete data