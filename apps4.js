const headEle = document.querySelector('h1');
const btn = document.querySelector('.btn');
const sear = document.querySelector('input');    // contains parm. for GitHub search query
sear.value = 'ajax'; // default value
const output = document.querySelector('.output');

btn.textContent = 'Search GitHub';
btn.addEventListener('click', getData);

// Event Listener that fires everytime DOM Content is loaded (i.e. Page Refreshed).
// Get the "zen" message from GitHub and load into "h1" element.
document.addEventListener('DOMContentLoaded', (e) => {
    fetch('https://api.github.com/zen')
        .then(rep => rep.text())
        .then(html => headEle.textContent = html)
})

// Handles the "click" event when "Search GitHub" btn is clicked
function getData() {
    const base = 'https://api.github.com/search/repositories';
    const q = `?q=${sear.value}`;
    fetch(base + q)
        .then(res => res.json())
        .then((data) => {
            output.innerHTML = '';
            maker ('div', output, data.total_count);
            console.log(data);
            makeOutput(data.items);
        })
}

// Creates an element using elment's type, it's parent, it's html. 
function maker (typ, par, html) {
    const ele = document.createElement(typ);
    ele.innerHTML = html;
    return par.appendChild(ele);
}

// function that expects an array of items, output by the GitHub API
function makeOutput(arr) {
    //console.log(arr);
    arr.forEach((el) => {
        //console.log(el);
        const main = maker('div', output, '');
        main.style.backgroundColor = '#ddd';
        main.style.border = '1px solid black';
        main.style.padding = '5px';
        main.style.margin = '5px';

        const ele = maker('div', main, el.description );
        ele.addEventListener('click', (e) => {
            ele.style.color = 'red';
            addDetails(ele, el.url);
        })
        
        // create "downloads_url" link
        const downlo = maker('div', main, '');
        const alink = maker('a', downlo, el.downloads_url);
        alink.setAttribute('href', el.downloads_url);
        alink.setAttribute('target', '_blank');

        // create "url" link
        const aURL = maker('div', main, '');
        const ulink = maker('a', aURL, el.url);
        ulink.setAttribute('href', el.url);
        ulink.setAttribute('target', '_blank');

    })
}

// Handles the "click" even when "description" is clicked
// par is the <div> which holds the "description"
function addDetails(par, url) {
    fetch (url)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            const newEle = maker('div', par, '');
            
            const owner = data.owner;
            //let html = `<div>${data.description}</div>`;
            let html = `<div>${owner.login}</div>`;
            html += `<div>${owner.id}</div>`;
            const el1 = maker('div', newEle, html);
            el1.style.padding = '10px';
            el1.style.fontSize = '0.8em';
            el1.style.backgroundColor = '#eee';
        })
}