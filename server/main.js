const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Подключение к базе данных PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Lavretania',
  password: '123123',
  port: 5432,
});

app.use(bodyParser.json());
app.use(cors());

// НПоинт для формы отправки
app.post('/submit-form', async (req, res) => {
  try {
    const { name, phone, email, date, wishes } = req.body;
    // Создание таблицы, если она еще не существует
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS submission_form (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        wishes TEXT
      )
    `;
    await pool.query(createTableQuery);
    // Вставка данных в таблицу
    const insertQuery = `
      INSERT INTO submission_form (name, phone, email, date, wishes)
      VALUES ($1, $2, $3, $4, $5)
    `;
    await pool.query(insertQuery, [name, phone, email, date, wishes]);
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('An error occurred while submitting the form');
  }
});

// НПоинт для обратной связи
app.post('/feedback', async (req, res) => {
  try {
    const { phone, message } = req.body;
    // Создание таблицы, если она еще не существует
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS feedback (
        id SERIAL PRIMARY KEY,
        phone VARCHAR(20) NOT NULL,
        message TEXT
      )
    `;
    await pool.query(createTableQuery);
    // Вставка данных в таблицу
    const insertQuery = `
      INSERT INTO feedback (phone, message)
      VALUES ($1, $2)
    `;
    await pool.query(insertQuery, [phone, message]);
    res.status(200).send('Feedback submitted successfully');
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).send('An error occurred while submitting the feedback');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
