const text = "Happy to be here keep going!! <3";

let index = 0;

function writeText() {
    document.body.innnerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 100);