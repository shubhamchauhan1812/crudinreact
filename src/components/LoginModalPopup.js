import React, { useState } from "react";
import "./CSS/LoginModalPopup.css"; // You can customize the CSS

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(formData);
    setShowModal(false); // Close the modal on successful login
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        Login
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
