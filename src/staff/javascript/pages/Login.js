import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Login.css';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/auth/login', {
                email,
                password,
            });

            // Assuming the response contains a token or success message
            const { token } = response.data;

            // Store token in local storage or context
            localStorage.setItem('authToken', token);

            // Redirect to dashboard or other protected route
            window.location.href = '/staff/dashboard'; // Redirect using window.location
        } catch (error) {
            setError('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="header">
                <span className="title">WUC</span>
            </div>
            <div className="login-box">
                <div className="login-content">
                    <div className="login-contain-inner">
                        <h2 className="system-title">WLUC Course MANAGEMENT SYSTEM</h2>
                        <form className="login-form" onSubmit={handleLogin}>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="password-field">
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="input-field"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="error-message">{error}</p>}
                            <div className="options">
                                <label>
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <a href="#" className="forgot-password">Forgot password?</a>
                            </div>
                            <button type="submit" className="login-button">
                                LOGIN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
