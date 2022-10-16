function generateReport() {
  //TODO
  const labels = Array.from(document.getElementsByTagName("th"));

  let columnLabels = [];

  for (let i = 0; i < labels.length; i++) {
    const column = labels[i];
    let columnObj = {
      name: column.textContent,
      value: column.children[0].checked,
    };
    columnLabels.push(columnObj);
  }

  let rows = Array.from(document.getElementsByTagName("tr"));

  const data = [];

  for (let i = 1; i < rows.length; i++) {
    const row = Array.from(rows[i].children);
    const obj = {};
    for (let y = 0; y < row.length; y++) {
      const col = row[y];
      if (columnLabels[y].value === true) {
        obj[columnLabels[y].name.trim().toLocaleLowerCase()] =
          col.textContent.trim();
      }
    }
    data.push(obj);
  }
  document.getElementById("output").textContent = JSON.stringify(data);
}
