window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const storyTitle = document.getElementById("story-title");
  const genre = document.getElementById("genre");
  const story = document.getElementById("story");

  const publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", publish);

  const ul = document.getElementById("preview-list");

  function publish() {
    if (
      !firstName.value ||
      !lastName.value ||
      !age.value ||
      !storyTitle.value ||
      !story.value
    )
      return;

    const li = document.createElement("li");
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    const pAge = document.createElement("p");
    const pTitle = document.createElement("p");
    const pGenre = document.createElement("p");
    const pStory = document.createElement("p");
    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);
    li.appendChild(article);

    const saveBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    editBtn.classList.add("edit-btn");
    deleteBtn.classList.add("delete-btn");
    saveBtn.textContent = "Save";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    h4.textContent = "Name: " + firstName.value + " " + lastName.value;
    pAge.textContent = "Age: " + age.value;
    pTitle.textContent = "Title: " + storyTitle.value;
    pGenre.textContent = "Genre: " + genre.value;
    pStory.textContent = story.value;

    ul.appendChild(li);

    saveBtn.addEventListener("click", saveStory);
    editBtn.addEventListener("click", editStory);
    deleteBtn.addEventListener("click", deleteStory);

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    genre.value = "";
    story.value = "";

    publishBtn.disabled = true;
  }

  function saveStory(e) {
    const maindiv = document.getElementById("main");
    maindiv.innerHTML = "<h1> Your scary story is saved!</h1>";
  }

  function editStory(e) {
    const article = e.target.parentElement.firstChild;
    let h4P = article.getElementsByTagName("h4")[0];
    h4P = h4P.textContent.substring(6, h4P.textContent.length);
    const nameP = h4P.split(" ")[0];
    const surnameP = h4P.split(" ")[1];
    const pS = article.getElementsByTagName("p");
    let ageP = pS[0].textContent.substring(5, pS[0].textContent.length);
    ageP = Number(ageP);
    const titleP = pS[1].textContent.substring(7, pS[1].textContent.length);
    const genreP = pS[2].textContent.substring(7, pS[2].textContent.length);
    const storyP = pS[3].textContent;

    firstName.value = nameP;
    lastName.value = surnameP;
    age.value = ageP;
    storyTitle.value = titleP;
    genre.value = genreP;
    story.value = storyP;

    e.target.parentElement.remove();

    publishBtn.disabled = false;
  }

  function deleteStory(e) {
    const li = e.target.parentElement;
    li.remove();
    publishBtn.disabled = false;
  }
}
