function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    const searchStr = document.getElementById("searchField").value;
    document.getElementById("searchField").value = "";

    const rows = Array.from(document.querySelectorAll("tbody tr"));

    for (let row of rows) {
      row.classList.remove("select");
      const cells = Array.from(row.children);
      for (let cell of cells) {
        if (cell.textContent.includes(searchStr)) {
          cell.parentElement.classList.add("select");
        }
      }
    }
  }
}
