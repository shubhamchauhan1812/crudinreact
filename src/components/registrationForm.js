import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
// Adjust the import based on your file structure
import './style.css';

function RegistrationForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({});
    const [customerData, setCustomerData] = useState([]);

    // Function to fetch customer data
    const fetchCustomerData = async () => {
        try {
            debugger;
            const response = await axios.get('https://localhost:44341/api/Customer/GetAllCustomers');
            setCustomerData(response.data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };

    // Call fetchCustomerData when the component mounts
    useEffect(() => {
        fetchCustomerData();
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        } else if (id === "lastName") {
            setLastName(value);
        } else if (id === "email") {
            setEmail(value);
        } else if (id === "password") {
            setPassword(value);
        } else if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        // First Name validation
        if (!firstName.trim()) {
            formErrors.firstName = "First name is required!";
            isValid = false;
        }

        // Last Name validation
        if (!lastName.trim()) {
            formErrors.lastName = "Last name is required!";
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            formErrors.email = "Email is required!";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            formErrors.email = "Invalid email format!";
            isValid = false;
        }

        // Password validation
        if (!password.trim()) {
            formErrors.password = "Password is required!";
            isValid = false;
        } else if (password.length < 6) {
            formErrors.password = "Password must be at least 6 characters!";
            isValid = false;
        }

        // Confirm Password validation
        if (!confirmPassword.trim()) {
            formErrors.confirmPassword = "Confirm password is required!";
            isValid = false;
        } else if (confirmPassword !== password) {
            formErrors.confirmPassword = "Passwords do not match!";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };
    // Clear form fields
    const clear = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
       // setErrors({});
    };

    // Handle edit operation
    const handleEdit = (customerId) => {
        // Logic to edit a customer (e.g., populate the form with selected customer data)
        const customerToEdit = customerData.find(customer => customer.id === customerId); // Assuming customer has an 'id' field
        if (customerToEdit) {
            setFirstName(customerToEdit.firstName);
            setLastName(customerToEdit.lastName);
            setEmail(customerToEdit.email);
            // You may want to save the ID for updating later
            // setCustomerId(customerToEdit.id); // If you want to keep track of which customer you're editing
        }
    };

    // Handle delete operation
    const handleDelete = async (customerId) => {
        try {
            await axios.delete('https://localhost:44341/api/Customer/DeleteCustomer');
            alert('Customer deleted successfully!');
            await fetchCustomerData(); // Refresh the customer list after deletion
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                debugger;
                const response = await axios.post('https://localhost:44341/api/Customer/ReactAdd', {
                    firstName,
                    lastName,
                    email,
                    password
                });

                if (response.data) {
                    alert(response.data);
                    clear();
                    await fetchCustomerData();
                }

            } catch (error) {
                console.error('Registration failed:', error);
            }
        }
    };



    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input
                        className="form__input"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input
                        className="form__input"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input
                        className="form__input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Password"
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                    <input
                        className="form__input"
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
            </div>
            <div className="footer">
                <button onClick={handleSubmit} type="submit" className="btn">Register</button>
            </div>

            {/* Data Table to show the customer list */}
            <DataTable data={customerData} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default RegistrationForm;
