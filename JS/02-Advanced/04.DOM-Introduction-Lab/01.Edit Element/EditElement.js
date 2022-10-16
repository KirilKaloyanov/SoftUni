function editElement(htmlElement, match, replacer) {
  let str = htmlElement.textContent;
  while (str.includes(match)) {
    str = str.replace(match, replacer);
  }
  htmlElement.textContent = str;
}
