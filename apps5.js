const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

btn.addEventListener('click', getData);

// Fetches JSON data for To-Dos
function getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    fetch(url)
        .then(response => response.json())
        .then(json => outputData(json))
}

function outputData(arr) {
    output.innerHTML = `<div>Results ${arr.length}</div>`;
    arr.forEach((i) => {
        console.log(i);
        const main = document.createElement('div');
        output.append(main);
        main.style.margin = '5px';
        main.style.border = '1px solid #ddd';
        main.innerHTML = `<div>${i.title}</div>`;
        main.innerHTML += `<div>ID: ${i.id} userID: ${i.userId} </div>`;
        main.completed = i.completed;  // load a boolean value into element "main"
        if (i.completed) {
            main.style.color = 'black';
        } else {
            main.style.color = 'red';
        }

        // On clicking an element, toggle it's "completed" from True to False or vice-versa
        main.addEventListener('click', (e) => {
            if(main.completed) {
                main.completed = false;
                main.style.color = 'red';
            } else {
                main.completed = true;
                main.style.color = 'black';
            }
        })

    })
}