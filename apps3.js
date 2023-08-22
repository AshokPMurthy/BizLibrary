const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const myInput = document.querySelector('input');
myInput.value = '/2.3/posts?order=desc&sort=activity&site=stackoverflow';
myInput.style.width = '100%';
const baseURL = 'https://api.stackexchange.com';

btn.addEventListener('click', getData); // make "btn" clickable

// function for "btn" "click" event.
function getData() {
    console.log('ready');
    const val = myInput.value;
    const url = `${baseURL}${val}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            outputData(data.items);
        })
}


// function to handle output of "data.items" array from "getData"
function outputData(arr) {
    output.innerHTML = "";  // clear the <div> with class of "output"
    arr.forEach((item) => {
        console.log(item);
        const main = eleMaker('div', output, '');
        main.style.border = '1px solid black';
        const elHead = eleMaker('div', main, `<h4>${item.post_id} ${item.post_type}</h4>`);
        const myLink = eleMaker('a', main, `${item.link}`);
        myLink.setAttribute('href', item.link);
        myLink.setAttribute('target', '_blank');
    })
}

// function that creates elements with it's TYPE, PARENT and HTML
function eleMaker(elType, elParent, elHTML) {
    const ele = document.createElement(elType);
    ele.innerHTML = elHTML;
    return elParent.appendChild(ele);
}
