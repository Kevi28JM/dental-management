import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css"; // Import custom styles

const Login = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // For redirection after login

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/login`, { role, ...formData });

      if (response.data.success) {
        alert("Login successful!");
        navigate("/dashboard"); // Redirect to the dashboard after login (update this path if needed)
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      alert("Error logging in. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3>Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-bold">Role</label>
            <select className="form-select" onChange={(e) => setRole(e.target.value)} required>
              <option value="">Select Role</option>
              <option value="Assistant">Assistant</option>
              <option value="Dentist">Dentist</option>
              <option value="Patient">Patient</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
