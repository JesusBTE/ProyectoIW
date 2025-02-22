import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Resena from "./Components/Resena"
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar"; 
import Register from "./Components/Register.jsx";
import AlertComponent from "./Components/AlertComponent.jsx"
import './app.css'
import { Alert } from "@mui/material";

function App() {
  return (
    <Router>
      <Navbar /> {/* Mantiene la barra de navegación en todas las páginas */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Work />
              <About />
              <Resena/>
              <Testimonial />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={
          <>
          <Login />
          <Register/>
          <AlertComponent/>
  
          </>
      } />
      </Routes>
    </Router>
  );
}

export default App;
