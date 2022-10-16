function solve() {
  //TODO
  const text = document.getElementById("input").value;
  const sentencesArray = text
    .trim()
    .split(".")
    .filter((x) => x.length > 0);

  const paragraphs = [];

  for (let i = 0; i < sentencesArray.length; i += 3) {
    let arr = [];
    for (let x = 0; x < 3; x++) {
      if (sentencesArray[i + x]) {
        arr.push(sentencesArray[i + x]);
      }
    }
    paragraphs.push(
      arr
        .map((x) => x + ".")
        .join(".")
        .trim()
    );
  }

  const divElement = document.getElementById("output");

  for (let paragraph of paragraphs) {
    const para = document.createElement("p");
    para.textContent = paragraph;
    divElement.appendChild(para);
  }
}
