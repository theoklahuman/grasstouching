import "./style.css";

const button = document.querySelector("button");
const ideaDisplay = document.querySelector(".idea-display");

button.addEventListener("click", displayIdea);

async function getIdea() {
    const idea = await fetch("https://www.boredapi.com/api/activity?", {
        mode: "cors",
    });
    let response = await idea.json();
    return response.activity;
}

function displayIdea() {
    getIdea().then((value) => {
        ideaDisplay.textContent = value;
    });
    ideaDisplay.classList.add("visible");
}