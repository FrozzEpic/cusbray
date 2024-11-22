import React from 'react';
import '../styles/signupStyles.css';

const Signup = () => (
  <div className="container">
    <button className="home-button">Logo</button>
    <h1>SIGN UP</h1>
    <form>
      <input type="text" className="input-field" placeholder="Full Name" required />
      <input type="text" className="input-field" placeholder="Username" required />
      <input type="email" className="input-field" placeholder="Email" required />
      <input type="password" className="input-field" placeholder="Password" required />
      <input type="password" className="input-field" placeholder="Confirm Password" required />
      <button type="submit" className="btn-signup">Sign Up</button>
    </form>
    <div className="social-login">
      <button className="google">Google</button>
      <button className="facebook">Facebook</button>
    </div>
    <div className="footer">
      <p>Already have an account? <a href="#">Login</a></p>
      <p>Need help? Visit our <a href="#">help center</a></p>
    </div>
  </div>
);

export default Signup;
