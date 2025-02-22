import express from "express";
import mongoose from "mongoose";
import cors from "cors"; //Importar CORS
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Habilitar CORS para aceptar peticiones desde el frontend
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//Middleware para manejar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://Gustavo:12345@clusterp.p1lgi.mongodb.net/FOODIE"
);

const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB conectado");
});

//Definir el esquema de usuario
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
});

const Users = mongoose.model("USERS", userSchema, "USERS");

// Ruta principal
app.get("/", (req, res) => {
  res.send("Servidor Backend en Express funcionando");
});

//Endpoint para recibir datos del formulario
// Endpoint para recibir datos del formulario y redirigir con SweetAlert2
app.post("/post", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Redirección</title>
          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        </head>
        <body>
          <script type="text/javascript">
            Swal.fire({
              title: "Mensaje",
              text: "Todos los campos son obligatorios",
              icon: "info",
              confirmButtonColor: "#4CAF50",
              confirmButtonText: "OK"
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/register";
              }
            });
          </script>
        </body>
        </html>
      `);
    }

    const user = new Users({ username, email, password });
    await user.save();

    console.log("Nuevo usuario registrado:", user);
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirección</title>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      </head>
      <body>
        <script type="text/javascript">
          Swal.fire({
            title: "Mensaje",
            text: "Usuario registrado con éxito",
            icon: "info",
            confirmButtonColor: "#4CAF50",
            confirmButtonText: "OK"
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/login";
            }
          });
        </script>
      </body>
      </html>
    `);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirección</title>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      </head>
      <body>
        <script type="text/javascript">
          Swal.fire({
            title: "Mensaje",
            text: "Error interno del servidor",
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK"
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/register";
            }
          });
        </script>
      </body>
      </html>
    `);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
