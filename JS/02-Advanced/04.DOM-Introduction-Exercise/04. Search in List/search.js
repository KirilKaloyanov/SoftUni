function search() {
  // TODO
  const searchString = document.getElementById("searchText").value;

  const listItems = document.getElementsByTagName("li");
  let counter = 0;

  for (item of listItems) {
    if (item.textContent.includes(searchString)) {
      item.style.fontWeight = "bold";
      item.style.textDecoration = "underline";
      counter++;
    } else {
      item.style.fontWeight = "";
      item.style.textDecoration = "";
    }
  }

  document.getElementById("result").textContent = `${counter} matches found`;
}
