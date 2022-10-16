function solve() {
  //TODO...
  const text = document.getElementById("text").value;
  const namingConvention = document.getElementById("naming-convention").value;
  console.log(text, namingConvention);

  if (namingConvention === "Pascal Case" || namingConvention === "Camel Case") {
    document.getElementById("result").textContent = transform(
      text,
      namingConvention
    );
  } else {
    document.getElementById("result").textContent = "Error!";
  }

  function transform(text, conv) {
    return text
      .trim()
      .split(" ")
      .map((str, index) => {
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
          if (i === 0) {
            if (index === 0 && conv === "Camel Case")
              newStr += str[i].toLowerCase();
            else newStr += str[i].toUpperCase();
          } else {
            newStr += str[i].toLowerCase();
          }
        }
        return newStr;
      })
      .join("");
  }
}
