import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePut, usePost } from "../_Hooks/Customs";
import Alert from "../Alert/Alert";
import { URL_USERS } from "../_Utils/Costants";
import "./UserForm.css";

const UserForm = ({ data }) => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const putData = usePut(URL_USERS, data?.id);
  const postData = usePost(URL_USERS);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setUser({
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setUser((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (data && data.id) {
        putData(user, () => {
          setAlertMessage("Modifica completata!");
          setAlertShow(true);
        });
      } else {
        postData(user, () => {
          setAlertMessage("Utente aggiunto!");
          setAlertShow(true);
        });
      }
    } catch (error) {
      console.error("Errore durante il salvataggio:", error);
    }
  };

  const handleAlertDismiss = () => {
    setAlertShow(false);
    navigate("/users");
  };

  return (
    <div className="user-form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="txtName">Nome</label>
          <input
            id="txtName"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="txtSurname">Cognome</label>
          <input
            id="txtSurname"
            className="form-control"
            name="surname"
            value={user.surname}
            onChange={handleChange}
            placeholder="Cognome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="txtEmail">Email</label>
          <input
            id="txtEmail"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="txtPassword">Password</label>
          <input
            id="txtPassword"
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="form-actions">
          <button className="btn btn-success" type="submit">
            Salva
          </button>
          <Link className="btn btn-danger" to="/users">
            Annulla
          </Link>
        </div>
      </form>
      <Alert show={alertShow} onHide={handleAlertDismiss} message={alertMessage} />
    </div>
  );
};

export default UserForm;
