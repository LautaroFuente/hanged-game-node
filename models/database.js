import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

/*const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});*/

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

try {
  await connection.connect();
  console.log("Se establecio conexion");
} catch (err) {
  console.error("Hubo un error al establecer conexion:", err);
}

export default connection;
