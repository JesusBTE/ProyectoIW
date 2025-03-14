import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar"; 
import './app.css'


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
              <Testimonial />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={
          <>
          <Login />
  
          </>
      } />
      </Routes>
    </Router>
  );
}

export default App;
