import connection from "./database.js";

const scores = {
  getScore: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM scores ORDER BY total desc LIMIT 0,5;"
      );
      return rows;
    } catch (err) {
      console.log(err);
      throw new Error(
        "Error al conectar a la base de datos o realizar la consulta"
      );
    }
  },

  addScore: async (points) => {
    const query = "INSERT INTO scores (score_id, name, total) VALUES (?, ?, ?)";
    const [results] = await connection.execute(query, [
      0,
      points.name,
      points.total,
    ]);
    return results.insertId;
  },
};

export default scores;
