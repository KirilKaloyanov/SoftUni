function extract(content) {
  let str = document.getElementById(content).textContent;

  let pattern = /\(([^)]+)\)/g;

  let result = str.matchAll(pattern);

  let arr = [];

  for (let text of result) {
    arr.push(text[1]);
  }
  return arr.join("; ");
}
