import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Bernardo321",
  database: "crud2",
});
