import Cards from "./Cards";
import React from "react";

const Resena = () => {
  return (
        <div className="about-section-container" id="resena">
            {/* Contenedor de cartas con espaciado entre ellas */}
                <div className="cards-container">
                  <Cards />
                </div>
            {/* Contenedor de cartas con espaciado entre ellas */}
        </div>
  );
};

export default Resena;