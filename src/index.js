import "./style.css";

const button = document.querySelector("button");
const ideaDisplay = document.querySelector(".idea-display");

button.addEventListener("click", () => {
    console.log("it works!");
    getIdea();
}
);

async function getIdea() {
    const idea = await fetch("https://www.boredapi.com/api/activity?", {
        mode: "cors",
    });
    let response = await idea.json();
    ideaDisplay.textContent = response.activity;
    displayIdea();
}

function displayIdea() {
    // document.body.classList.add("upbeat-theme");
    ideaDisplay.classList.add("visible");
}