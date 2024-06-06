import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import gameControllers from "./controllers/gameControllers.js";
import connection from "./models/database.js";

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", gameControllers.getHome);
app.get("/instructions", gameControllers.getInstructions);
app.get("/game", gameControllers.getGame);
app.get("/gameOver", gameControllers.getGameOver);
app.get("/score", gameControllers.getScore);

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});

process.on("SIGINT", async () => {
  try {
    await connection.end();
    console.log("Conexion con la base de datos cerrada");
    process.exit(0);
  } catch (err) {
    console.error("Erro al cerrar la conexion:", err);
    process.exit(1);
  }
});
