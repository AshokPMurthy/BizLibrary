const output1 = document.querySelector('.output1'); // get div with a class = output1
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
const output4 = document.createElement('div');   // add a "<div>" element to body
document.body.append(output4);

const btn = document.createElement('button');
btn.textContent = 'Fetch Data';

const ul = document.createElement('ul');         // add a "<ul>" element to div "output4"
output4.append(ul);

//output2.textContent = "clicker";

const myInput = document.createElement('input');
myInput.style.margin = '5px';
myInput.style.marginTop = '20px';

console.log("myInput = " + myInput);
const txt1 = document.createTextNode('Enter a Value : ');
const txt2 = document.createTextNode('Text 2');
output2.append(myInput); // only adding it to a parent will make "myInput" visible
output2.prepend(txt1);
output2.prepend(btn);

//const res = output2.appendChild(txt2);
//console.log("res = " + res);

myInput.setAttribute('placeholder', 'enter value');
output2.append(myInput); // will not add a new child, but simply modify existing one.
//output2.append(output1);
myInput.setAttribute('type', 'text');
myInput.addEventListener('focusout', (e) => { // when someone clicks off the TextBox
    output3.textContent = myInput.value;
    //myInput.value = "";
})

output1.addEventListener('click',  getClick);
//output2.addEventListener('click',  getClick);

// event listener for the "Fetch Data" button
btn.addEventListener('click', () => {
    fetch('data9.json')
        .then(rep => rep.json())
        .then((data) => {
            console.log(data.arr);
            data.arr.forEach((ele) => {
                const el = maker('div', ele, output4);
                console.log(el);
            });
        })
})

function maker(eleType, html, parent) {
    const el = document.createElement(eleType);
    el.innerHTML = html;
    parent.append(el);
    return el;
}

// event listener for "output1", the "Click Me" div
function getClick(event) {
    console.log(event.target); // element that initiated the click.
    // add a li item to the ul everytime you click "output1" div.
    const li = document.createElement('li');
    ul.append(li);
    li.textContent = myInput.value;
    myInput.value = "";
}