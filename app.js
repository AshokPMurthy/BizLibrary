// Retrieves JSON file "data.json"
let data = {};
const url = "data.json";
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })