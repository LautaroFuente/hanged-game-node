const d = document;
const params = new URLSearchParams(window.location.search);
const UserURL = params.get("name");

const btn = d.querySelectorAll(".btn");
const word_container = d.getElementById("word");
const part_1 = d.querySelector(".part1");
const part_2 = d.querySelector(".part2");
const part_3 = d.querySelector(".part3");
const part_4 = d.querySelector(".part4");
const part_5 = d.querySelector(".part5");
const part_6 = d.querySelector(".part6");
const current_time = d.querySelector(".time");
const current_points = d.querySelector(".points");

const words = [
  "tigre",
  "elefante",
  "leopardo",
  "jirafa",
  "rinoceronte",
  "cebra",
  "cocodrilo",
  "hipopotamo",
  "mono",
  "chimpance",
  "gorila",
  "koala",
  "canguro",
  "delfin",
  "ballena",
  "ornitorrinco",
  "perezoso",
  "oso",
  "zorro",
  "lobo",
  "mapache",
  "huron",
  "nutria",
  "castor",
  "ardilla",
  "murcielago",
  "mariquita",
  "abeja",
  "mosquito",
  "libelula",
  "saltamontes",
  "cucaracha",
  "escarabajo",
  "mariposa",
  "avispa",
  "caracol",
  "babosa",
  "gusano",
  "medusa",
  "estrella de mar",
  "pulpo",
  "calamar",
  "cangrejo",
  "langosta",
  "langostino",
  "camarón",
  "caracol de mar",
  "almeja",
  "mejillon",
  "ostra",
];
let points = 0;
let time = 60;
current_time.textContent = time;
current_points.textContent = points;

const index = Math.floor(Math.random() * words.length);
const word = words[index].toUpperCase();
let tries = 0;

function initWord() {
  const letters = word.split("");

  letters.forEach((l) => {
    const b = document.createElement("b");

    if (l === " ") {
      b.textContent = " ";
    } else {
      b.textContent = "_";
    }
    b.classList.add("margin");

    word_container.appendChild(b);
  });
}

function updateWord(letter) {
  let win = true;
  for (let i = 0; i < word.length; i++) {
    const letter_word = word[i];

    if (letter_word === letter) {
      word_container.children[i].textContent = letter_word;
    }

    if (word_container.children[i].textContent === "_") {
      win = false;
    }
  }
  if (win) {
    points = points + time;
    window.location.href = `/gameOver?state=GANASTE!&points=${points}&name=${UserURL}`;
  }
}

function updateDummy(tries) {
  if (tries === 1) {
    part_1.classList.add("show");
  } else if (tries === 2) {
    part_2.classList.add("show");
  } else if (tries === 3) {
    part_3.classList.add("show");
  } else if (tries === 4) {
    part_4.classList.add("show");
  } else if (tries === 5) {
    part_5.classList.add("show");
  } else if (tries === 6) {
    part_6.classList.add("show");
  } else {
    window.location.href = `/gameOver?state=PERDISTE!&points=0&name=${UserURL}`;
  }
}

function checkMatch(letter) {
  if (word.includes(letter)) {
    console.log(`La letra ${letter} esta en la palabra.`);
    updateWord(letter);
    points = points + 10;
    current_points.textContent = points;
  } else {
    console.log(`La letra ${letter} no esta en la palabra.`);
    tries = tries + 1;
    updateDummy(tries);
    points = points - 3;
    current_points.textContent = points;
  }
}

function handleClick(el) {
  el.disabled = true;
  el.removeEventListener("click", handleClick);
}

function initKeyboard() {
  btn.forEach((el) => {
    el.addEventListener("click", () => {
      checkMatch(el.innerText);
      handleClick(el);
    });
  });
}

function initTimer() {
  const intervalTime = setInterval(() => {
    time -= 1;
    current_time.textContent = time;
    if (time <= 0) {
      clearInterval(intervalTime);
      window.location.href = `/gameOver?state=PERDISTE!&points=0&name=${UserURL}`;
    }
  }, 1000);
}

const initGame = () => {
  initWord();
  initKeyboard();
  initTimer();
};

initGame();
