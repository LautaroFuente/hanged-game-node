import scores from "../models/scoresModel.js";

const getHome = (req, res) => {
  res.render("index", { title: "¡Bienvenido al juego del ahorcado!" });
};

const getInstructions = (req, res) => {
  const name = req.query.name;
  res.render("instructions", {
    title: "Instrucciones de como jugar",
    user: name,
  });
};

const getGame = (req, res) => {
  const name = req.query.name;
  res.render("game", { title: "Intenta adivinar la palabra!", user: name });
};

const getGameOver = (req, res) => {
  const name = req.query.name;
  let total = parseInt(req.query.points, 10);

  if (total > 0) {
    scores.addScore({ name, total });
  } else {
    total = 0;
  }
  res.render("gameOver", { title: "Fin del juego", points: total, name });
};

const getScore = async (req, res) => {
  let data = await scores.getScore();

  res.render("score", { title: "Top 5 puntuaciones", score: data });
};

export default {
  getHome,
  getInstructions,
  getGame,
  getGameOver,
  getScore,
};
