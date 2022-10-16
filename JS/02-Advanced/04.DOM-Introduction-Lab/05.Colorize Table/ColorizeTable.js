function colorize() {
  // TODO
  const rows = document.querySelectorAll("tr:nth-child(2n)");
  for (let item of rows) {
    item.style.backgroundColor = "teal";
  }
}
