import "./style.css";

const button = document.querySelector("button");
const ideaDisplay = document.querySelector(".idea-display");

button.addEventListener("click", displayIdea);

async function getIdea() {
  const idea = await fetch("https://www.boredapi.com/api/activity?", {
    mode: "cors",
  });
  let response = await idea.json();
  const activity = response.activity;
  const participants = response.participants;
  const price = response.price;
  return [activity, participants, price];
}

function displayIdea() {
  getIdea().then((value) => {
    if (value[1] <= 1) {
      ideaDisplay.textContent = `You can ${value[0]}! this can be done all by yourself for as low as $${value[2]}`;
    } else {
      ideaDisplay.textContent = `You can ${value[0]}, this can be done with up to ${value[1] - 1} other people for as low as $${value[2]}`;
    }
  });
  ideaDisplay.classList.add("visible");
}
