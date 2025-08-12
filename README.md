# Hanged Game Node

### This project using Node.JS, Express.JS, MySQL y Pug.

### Getting Started

#### Prerequisites

- you must have Node.JS installed.
- you must have MySQL installed.

#### Installation

- Clone the repository: `git clone https://github.com/LautaroFuente/hanged-game-node` .
- Navigate to the project directory: `cd hanged-game-node`.
- Create and set up .env:
  `DB_HOST=localhost`
  `DB_USER=root_or_your_user`
  `DB_PASSWORD=your_password`
  `DB_NAME=score_db`
- Install dependencies: `npm install`.
- Create database and tables: you can use the script `ForCreateDB.sql` for this.
- Run app: `npm start`.
- Open the application in your browser: visit `http://localhost:3000` in your browser.

### Or see it in operation here if continue active

- Link: https://hanged-game-node-production.up.railway.app/.

### Test with Docker

You can run the application together with the MySQL database using **Docker Compose**.

Steps:

1. Make sure you have **Docker** and **Docker Compose** installed on your system.
2. Create a `.env` file in the root of the project (you can base it on `.env.example`):

   ```env
   PORT=3000

   # MySQL root user password
   DB_ROOT_PASSWORD=root_password_here

   # MySQL database + user
   DB_NAME=score_db
   DB_USER=score_user
   DB_PASSWORD=score_password_here
   DB_PORT=3306
   ```

3. Start the containers: `docker compose up -d`
4. This will start:

A MySQL container with the database and user configured.

The Node.js application connected to that database. 5. Open the application in your browser at:
http://localhost:3000 6. To stop the containers: `docker compose down`
