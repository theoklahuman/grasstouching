import "./style.css";

const button = document.querySelector("button");
const ideaDisplay = document.querySelector(".idea-display");
const intro = document.querySelector(".opening-intro__section");

button.addEventListener("click", ideaControllerHandler);

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
    const ideainfo = value[0].charAt(0).toLowerCase() + value[0].slice(1);
    if (value[1] <= 1) {
      ideaDisplay.textContent = `You can ${ideainfo}! this can be done all by yourself for as low as $${parseFloat(
        value[2]
      ).toFixed(2)}`;
    } else {
      ideaDisplay.textContent = `You can ${ideainfo}, this can be done with up to ${
        value[1] - 1
      } other people for as low as $${value[2]}`;
    }
  });
  ideaDisplay.classList.add("visible");
}

function hideOpeningIntro() {
  intro.classList.replace("opening-intro__section", "invisible");
}

function ideaControllerHandler() {
  if (intro.className === "opening-intro__section") {
    hideOpeningIntro();
    displayIdea();
  } else {
    displayIdea();
  }
}



let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

console.log(company.sales[0].name);

class Animal {
  constructor(name, type, legs) {
    this.name = name;
    this.type = type;
    this.legs = legs;
    this.speed = 0;
  }

  runs() {
    console.log(`${this.name} is running`);
  }

  stops() {
    console.log(`${this.name} has stopped running`);
  }
}

const firstAnimal = new Animal("rabbit", "wild", 4);
firstAnimal.runs();
firstAnimal.stops();
console.log(firstAnimal.speed);