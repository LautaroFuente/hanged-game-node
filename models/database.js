import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT || 3306,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  await connection.connect();
  console.log("Se establecio conexion");
} catch (err) {
  console.error("Hubo un error al establecer conexion:", err);
}

export default connection;
