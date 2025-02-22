// Por ejemplo, en Login.jsx o en el componente que maneja la respuesta:
import { useState } from "react";
import AlertComponent from "./AlertComponent"; // Asegúrate de la ruta correcta

export default function Login() {
  const [alertData, setAlertData] = useState(null);

  // Aquí puedes, por ejemplo, recibir el resultado de una operación (por props o contexto)
  // y asignarlo a alertData. Si alertData es null, no se renderiza el alert.

  return (
    <div>
      <h2>Login</h2>
      {"/Login"}
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
