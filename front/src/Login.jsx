import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login({ setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setAuth(true);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>Not registered yet? <a href="/register">Register</a></p>
    </div>
  );
}

export default Login;
