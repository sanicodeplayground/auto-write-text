const text = "Sanita is doing great! ❤️";

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, index);

  index++;

  if (index > text.leng - 1) {
    index = 0;
  }
}

setInterval(writeText, 100);
