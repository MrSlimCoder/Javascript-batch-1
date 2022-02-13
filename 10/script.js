/*API 
// Application programming interface
// Consume - Frontend (JavaScript, React.js, Angular) - fetch(), request()
// Produce - Backend (Node.js, Django, PHP)
*/

/* MOCK API (NO CODE) */

/* SOAP API - XML (CASE SENSTIVE) */

/* REST API

- GET (Get Data - Backend to Frontend) - return response
- POST (Send Data - Frontend to Backend) - return response
- DELETE (Delete Data - Frontend to Backend) - return response
- PUT (Update whole Data - Frontend to Backend) - return response 
- PATCH (Update few fields of Data - Frontend to Backend) - return response

*/

// const myJSON = {
//     "name": "vivek",
//     "age": 25
// }

// // GET 

// console.log("GET","Get data from backend",myJSON);

// // POST 

// console.log("POST","Send data to backend", myJSON);

// // DELETE

// console.log("DELETE","Delete data from backend",null);

// // PUT 

// myJSON.age = 24;
// myJSON.name = "Rasool";

// console.log("PUT","Update data in backend",myJSON);

// // PATCH

// myJSON.age = 30;

// console.log("PATCH","Update field in backend",myJSON);

// https://jsbootcamp.free.beeceptor.com

// Request, Response


// GET REQUEST
function apiGet() {
    fetch(`http://jsbootcamp.free.beeceptor.com`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response) => {
        const data = await response?.json();
        if (data) {
            document.getElementById("details").innerHTML = "<h1>GET REQUEST</h1>";
            for (let i in data) {
                document.getElementById("details").innerHTML += `
            <h3>User: ${parseInt(i) + 1}</h3>
            <strong>${data[i].name}</strong>
            <strong>${data[i].age}</strong>
            `
            }
        }
    }).catch((error) => {
        console.log("error", error);
    });
}

apiGet();

// POST REQUEST
function apiPost() {
    fetch(`http://jsbootcamp.free.beeceptor.com`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response) => {
        const data = await response?.json();
        if (data) {
            document.getElementById("details").innerHTML += `
        <h1>POST REQUEST</h1>
        <strong>${data.name}</strong>
        <strong>${data.age}</strong>
        `
        }
    }).catch((error) => {
        console.log("error", error);
    });
}

apiPost();

// DELETE REQUEST 
function apiDelete() {
    fetch(`http://jsbootcamp.free.beeceptor.com`, {
        method: 'Delete', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response) => {
        const data = await response?.json();
        if (data) {
            document.getElementById("details").innerHTML += "<h1>DELETE REQUEST</h1>";
            for (let i in data) {
                document.getElementById("details").innerHTML += `
            <h3>User: ${parseInt(i) + 1}</h3>
            <strong>${data[i].name}</strong>
            <strong>${data[i].age}</strong>
            `
            }
        }
    }).catch((error) => {
        console.log("error", error);
    });
}

apiDelete();