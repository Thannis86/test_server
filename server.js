// Packages

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Server Start

const port = 8080;

app.listen(port, function () {
  console.log(`Server running in port ${port}`);
});

// DB Connection

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

// Find Tables

app.get("/table-names", async (req, res) => {
  const query = await db.query(`SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';`);
  await res.json(query);
  await console.log(query);
});

// Get table info

const table = "moods";

app.get("/data", async (req, res) => {
  const query = await db.query(`SELECT * FROM ${table}`);
  await res.json(query.rows);
  await console.log(query.rows);
});

// Test DB connection

db.connect()
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Error connecting to DB"));
