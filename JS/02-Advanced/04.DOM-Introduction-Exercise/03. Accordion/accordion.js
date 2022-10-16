function toggle() {
  let hiddenDivSyle = document.getElementById("extra");
  hiddenDivSyle.style.display === "" || hiddenDivSyle.style.display === "none"
    ? (hiddenDivSyle.style.display = "block")
    : (hiddenDivSyle.style.display = "none");
  let btn = document.getElementsByClassName("button")[0];
  btn.textContent === "More"
    ? (btn.textContent = "Less")
    : (btn.textContent = "More");
}
