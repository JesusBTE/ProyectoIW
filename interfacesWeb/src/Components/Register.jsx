import { useState } from "react";
import AlertComponent from "./AlertComponent"; // Asegúrate de la ruta correcta

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [alertData, setAlertData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setAlertData({
        message: data.message,
        icon: data.success ? "info" : "error",
        redirectTo: data.redirectTo
      });
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setAlertData({
        message: "Error al registrar usuario",
        icon: "error",
        redirectTo: "/register"
      });
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      {alertData && (
        <AlertComponent
          message={alertData.message}
          icon={alertData.icon}
          redirectTo={alertData.redirectTo}
        />
      )}
    </div>
  );
}

