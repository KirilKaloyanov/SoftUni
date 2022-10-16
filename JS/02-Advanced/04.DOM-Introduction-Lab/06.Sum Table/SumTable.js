function sumTable() {
  const rows = document.getElementsByTagName("tr");
  let sum = 0;

  for (let i = 1; i < rows.length - 1; i++) {
    sum += Number(rows.item(i).getElementsByTagName("td")[1].textContent);
  }

  document.getElementById("sum").textContent = sum;
}
