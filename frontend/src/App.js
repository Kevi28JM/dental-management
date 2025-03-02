import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup"; // Import Signup Page
import HomePage from "./pages/HomePage"; // Import the HomePage component
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
