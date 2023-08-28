const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const myInput = document.querySelector('input');
myInput.value = 'testing title';

const main = document.querySelector('.container');
const btn1 = btnMaker(main, 'Load Get Posts', 'blue');

btn.textContent = 'Add New Entry';
const baseUrl = 'https://jsonplaceholder.typicode.com/';

// POST data
btn.addEventListener('click', addData); 

btn1.addEventListener('click', (e) => {
    // GET Posts
    const url = baseUrl + 'posts';
    output.innerHTML = '<div>Loading posts</div>';

    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            data.forEach((el) => {
                addElement(el);    
            })
        })
})

//  Utility function to create an element
function addElement(el) {
    const ele = document.createElement('div');
    const p = document.createElement('p');

    output.append(ele);
    ele.append(p);

    p.innerHTML = `${el.title}`;
    p.setAttribute('contenteditable', true); // allows us to edit the title

    ele.style.border = '1px solid #ddd';
    ele.style.margin = '5px';
    // add the "Edit" and "Delete" buttons
    const opts = document.createElement('div');
    ele.append(opts);
    const btn1 = btnMaker(opts, 'Save', 'green');
    const btn2 = btnMaker(opts, 'Remove', 'red');

    // add the "Save" button listener
    btn1.addEventListener('click', (e) => {
        console.log(el.id);
        console.log(p.textContent); // should show the edited title.
        updateItem(el.id, p.textContent);
    });
    
    // add the "Remove" button listener
    btn2.addEventListener('click', (e) => {
        console.log(el.id);
        deleteItem(el.id, ele);
    });
}


// called by btn1.addEventListener
function updateItem(id, val) {
    // UPDATE Posts
    const url = baseUrl + 'posts/' + id;
    const body = {
        'title' : val
    };

    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(res => console.log(res));

}//end- updateItem


// called by btn2.addEventListener
function deleteItem(id, parent) {
    // DELETE Posts
    const url = baseUrl + 'posts/' + id;
    fetch(url, {
        method: 'DELETE' })
    .then(res => res.json())
    .then(res => console.log(res));

    parent.remove(); // remove the deleted element from the DOM
}//end- deleteItem


// Utility function to create buttons
function btnMaker(parent, html, bg) {
    const btnEle = document.createElement('button');
    btnEle.innerHTML = html;
    btnEle.style.backgroundColor = bg;
    btnEle.style.color = 'white';
    return parent.appendChild(btnEle);
}


// Click event of "btn". Used to POST data.
function addData() {
    // ADD Posts
    const url = baseUrl + 'posts';
    const json = {
        'title' : myInput.value,
        'body' : 'New Body',
        'userId' : 1
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data)
    });
}//end- addData()
