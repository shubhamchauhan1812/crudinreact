// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
        <h2>Login</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}>
          Login
        </button>
        <h3>If you don't have an account</h3><a href="/listData">Go to Register Page</a>
        <h3>If you don't have an account</h3>
        <Link to="/listData">Home</Link>
      </form>
    </div>
  );
};

export default Login;
