const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const myInput = document.querySelector('input');
myInput.setAttribute('type', 'number');
myInput.value = 1;

const url = 'https://randomuser.me/api/?results';

btn.addEventListener('click', getData);

function getData(e) {
    //console.log(e);
    const val = myInput.value;
    const urlResults = `${url}=${val}`;
    output.textContent = `fetching ${val} results.....`;
    fetch(urlResults).then(rep => rep.json())
        .then((data) => {
            //console.log(data.results);
            outputData(data.results);
        })
}

function outputData(data) {
    data.forEach((person) => {
        createRecord(person);
    });
}

function createRecord(person) {
    //output
    console.log(person);
    const container = maker('div', output, '')
    container.style.border = '1px solid black';
    container.style.padding = '5px';
    container.style.margin = '3px';

    const val1 = `${person.name.title} ${person.name.first} ${person.name.last}`;
    const namer = maker('div', container, val1);

    const img = maker('img', container, '');
    img.src = person.picture.thumbnail;

    const val2 = `${person.id.name} ${person.cell} ${person.email}`;
    const detailEle = maker('small', container, val2);
    detailEle.style.display = 'block';
    detailEle.style.fontsize = '9px';

    container.style.backgroundColor = '#ddd';
    namer.style.fontSize = '2em';
    img.style.border = '5px solid white';

    // toggle the color from red to black on
    // "div" that shows "person.name.title person.name.first person.name.last";
    namer.addEventListener('click', (e) => {
        namer.classList.toggle('red');
    })
}

function maker(eleType, elParent, elHTML) {
    const ele = document.createElement(eleType);
    elParent.append(ele);
    ele.innerHTML = elHTML;
    return ele;
}