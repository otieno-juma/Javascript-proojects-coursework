const newParagraph = newParagraph.innerText = "Added with javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE121b</h2><p>Welcome to javascript Language</p>";
document.body.appendChild(newSection);