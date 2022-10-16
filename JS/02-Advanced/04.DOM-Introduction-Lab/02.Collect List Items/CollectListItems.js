// function extractText() {
//   document.getElementsByTagName("textarea")[0].textContent = document
//     .getElementById("items")
//     .textContent.trim();
// }

function extractText() {
  let textareaElement = document.getElementsByTagName("textarea")[0];
  let items = document.getElementById("items").getElementsByTagName("li");
  for (i of items) {
    textareaElement.textContent += `${i.textContent}\n`;
  }
}
