import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Style/CarouselStyles.css";

function Carousel() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, rating }]);
      setNewComment("");
      setRating(5);
    }
  };

  return (
    <div className="container mt-4">
      {/* Carrusel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://www.rednayarita.com/wp-content/uploads/2017/01/Loma42-1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://static.wixstatic.com/media/d75652_57fdc5f55357453b9f7b4c90be826791~mv2.png/v1/fill/w_400,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/L42_Logo_Negro_PNG.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.rednayarita.com/wp-content/uploads/2017/01/Loma42-3.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      {/* Contenedor inferior */}
      <div className="content-container mt-4 p-4">
        <div className="row">
          {/* Descripción */}
          <div className="col-md-6 description">
            <h3>Descripción</h3>
            <div className="user-info">
              <div>
                <p>
                  <img
                    height="40px"
                    width="40px"
                    src="https://img.icons8.com/ios7/512/FFFFFF/google-maps-new.png"
                    alt="Ubicación"
                  />
                  Ubicado en: <strong>Escobedo 199</strong>
                </p>
                <p>
                  <img
                    height="40px"
                    width="40px"
                    src="https://img.icons8.com/ios7/600/FFFFFF/clock.png"
                    alt="Horario"
                  />
                  Horario: <strong>9:00 AM - 8:00 PM</strong>
                </p>
                <p>
                  <img
                    height="40px"
                    width="40px"
                    src="https://img.icons8.com/ios_filled/512/FFFFFF/whatsapp--v2.png"
                    alt="Teléfono"
                  />
                  Teléfono: <strong>+52 3891083922</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Sección de comentarios */}
          <div className="col-md-6 comments">
            <h3>Comentarios</h3>
            <div className="comments-container">
              <ul className="list-group">
                {comments.length === 0 ? (
                  <li className="list-group-item">No hay comentarios aún.</li>
                ) : (
                  comments.map((c, index) => (
                    <li key={index} className="list-group-item comment-item">
                      {[...Array(c.rating)].map((_, i) => (
                        <img
                          key={i}
                          src="https://img.icons8.com/ios-filled/50/FFD700/star.png"
                          alt="Star"
                          className="star-icon"
                        />
                      ))}
                      <span className="comment-text">{` - ${c.text}`}</span>
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* Formulario para agregar comentarios */}
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Añadir un comentario..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <div className="mt-2">
                <h5>Calificación:</h5>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <img
                      key={num}
                      src={
                        num <= rating
                          ? "https://img.icons8.com/ios-filled/50/FFD700/star.png"
                          : "https://img.icons8.com/ios/50/000000/star.png"
                      }
                      alt="Star"
                      onClick={() => setRating(num)}
                      className="star-icon"
                    />
                  ))}
                </div>
              </div>
              <button
                className="btn btn-primary mt-2"
                onClick={handleAddComment}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
