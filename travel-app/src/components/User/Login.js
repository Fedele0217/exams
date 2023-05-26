import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL_USERS } from "../_Utils/Costants";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Effettua una richiesta GET per ottenere la lista degli utenti all'avvio del componente
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(URL_USERS);
      const users = response.data;
      console.log(users); // Stampa la lista degli utenti nel database

      // ... Altri codici per elaborare i dati degli utenti se necessario ...
    } catch (error) {
      console.error("Errore durante il recupero degli utenti:", error);
    }
  };

  // Funzione per gestire il cambio di valore nell'input email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Funzione per gestire il cambio di valore nell'input password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Funzione per gestire il processo di accesso
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(URL_USERS); // Effettua una richiesta GET ai dati degli utenti
      const users = response.data; // Ottieni la lista degli utenti dalla risposta

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Utente trovato, esegui accesso
        onLogin(); // Chiamata alla funzione di callback per impostare lo stato di accesso nel componente superiore
        navigate("/", { state: { user } }); // Naviga alla pagina principale dopo il login e passa l'utente come state
      } else {
        setErrorMessage("Credenziali non valide. Riprova.");
      }
    } catch (error) {
      console.error("Errore durante il recupero degli utenti:", error);
    }
  };
  

  return (
    <div className="container mt-4">
      <h5>Login</h5>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Accedi
        </button>
        <Link to="/users/new" className="btn btn-link">
          Registrati
        </Link>
      </form>
    </div>
  );
};

export default Login;
