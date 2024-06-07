const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

const secretKey = 'ananasik12345678'; // Замените на свой секретный ключ

// Подключение к базе данных PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Lavretania',
  password: '123123',
  port: 5432,
});

// Создание таблицы пользователей
const createUsersTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birthdate DATE NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`;

pool.query(createUsersTableQuery)
  .then(() => console.log('Users table created or verified'))
  .catch(err => console.error('Error creating users table:', err));

// Создание таблицы для форм отправки
const createSubmissionFormTableQuery = `
  CREATE TABLE IF NOT EXISTS submission_form (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    wishes TEXT
  )
`;

pool.query(createSubmissionFormTableQuery)
  .then(() => console.log('Submission form table created or verified'))
  .catch(err => console.error('Error creating submission form table:', err));

// Создание таблицы для обратной связи
const createFeedbackTableQuery = `
  CREATE TABLE IF NOT EXISTS feedback (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(20) NOT NULL,
    message TEXT
  )
`;

pool.query(createUsersTableQuery)
  .then(() => console.log('Users table created or verified'))
  .catch(err => console.error('Error creating users table:', err));

// Эндпоинт для регистрации
app.post('/register', async (req, res) => {
  try {
    const { name, email, birthdate, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery = `
      INSERT INTO users (name, email, birthdate, password)
      VALUES ($1, $2, $3, $4)
    `;
    await pool.query(insertQuery, [name, email, birthdate, hashedPassword]);
    res.status(200).send('Registration successful');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('An error occurred during registration');
  }
});

// Эндпоинт для авторизации
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt with email:', email); // Логируем email для проверки

    const selectQuery = `
      SELECT * FROM users WHERE email = $1
    `;
    const result = await pool.query(selectQuery, [email]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
      } else {
        console.log('Invalid password for email:', email); // Логируем ошибку
        res.status(401).send('Invalid email or password');
      }
    } else {
      console.log('Email not found:', email); // Логируем ошибку
      res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('An error occurred during login');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});