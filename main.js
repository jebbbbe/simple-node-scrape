const { JSDOM } = require('jsdom');
const search = require('./url.js');

async function fetch_demo(className = "Layout_hide_sm__34TkF", url = 'https://www.reddit.com/r/programming.json'){
    try {
        // Request the Reddit URL and save the response in "resp"
        const resp = await fetch(url);
        if(!resp.ok){
            throw new Error("http err")
        }
        const htmlText = await resp.text()
        const dom = new JSDOM(htmlText);
        const document = dom.window.document;

        //find elm
        const elements = document.querySelectorAll(`.${className}`);
        return elements
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

main()
async function  main(){
    const targetClass = "Layout_hide_sm__34TkF"
    for (q of search){

        const elem = await fetch_demo(targetClass,q);

        elem.forEach(element => {
            console.log(element.textContent);
        });

        await delay(5000);
    }
}