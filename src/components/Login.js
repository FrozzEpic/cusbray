import React from 'react';
import '../styles/loginStyles.css';

const Login = () => (
  <div className="container">
    <button className="home-button">Logo</button>
    <h1>LOGIN</h1>
    <div className="error">Invalid username and/or password, Please try again</div>
    <form>
      <input type="text" className="input-field" placeholder="Username" required />
      <input type="password" className="input-field" placeholder="Password" required />
      <div className="forgot-link">
        <a href="#">Forgot Username?</a>
        <a href="#">Forgot Password?</a>
      </div>
      <button type="submit" className="btn-login">Login</button>
    </form>
    <div className="social-login">
      <button className="google">Google</button>
      <button className="facebook">Facebook</button>
    </div>
    <div className="footer">
      <p>Don't have an account? <a href="#">Register</a></p>
      <p>Need help? Visit our <a href="#">help center</a></p>
    </div>
  </div>
);

export default Login;
