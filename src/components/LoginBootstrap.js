import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginBootstrap = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      debugger;
      // Submit the login data to your API
      const response = await axios.post('https://localhost:44341/api/Customer/Login', {

        email,
        password,
      });
      console.log('Login successful', response.data);

      // Redirect to the home page after successful login
      navigate('/registrationForm');  // Change '/home' to the actual path of your home page


      // Handle successful login (e.g., redirect, store token)
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
                {/* Email input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="form-label" htmlFor="form2Example1">
                    Email address
                  </label>
                </div>

                {/* Password input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="form-label" htmlFor="form2Example2">
                    Password
                  </label>
                </div>

                {/* Checkbox */}
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="form2Example31"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="form2Example31">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    
                  <Link to="/forgotpassword">Forgot password?</Link>
                  </div>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign in
                </button>

                {/* Register and social sign-in buttons */}
                <div className="text-center">
                  <p>Not a member? <Link to="/registrationForm">Register</Link></p>
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBootstrap;
