import { useDelete, useGet } from "../_Hooks/Customs";
import { URL_USERS } from "../_Utils/Costants";
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";
import UserItem from "./UserItem";

const User = () => {
  const { data, error, mutate } = useGet(URL_USERS);

  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Funzione per nascondere l'alert
  const alertDismiss = () => {
    setAlertShow(false);
  };

  // Funzione di callback per la notifica di eliminazione riuscita
  const deleteSuccess = () => {
    setAlertMessage("Eliminazione completata");
    setAlertShow(true);
    mutate();
  };

  if (error) {
    return <div>Si è verificato un errore durante il recupero degli utenti.</div>;
  }

  return (
    <>
      <div className="container mt-10">
        <h5>Utenti</h5>
        <Link to="new" className="btn btn-sm btn-outline-success">
          Registrati
        </Link>
        <div className="row">
          {data &&
            data.map((user) => (
              <UserItem
                key={user.id}
                user={user}
                deleteSuccess={deleteSuccess}
              />
            ))}
        </div>
      </div>
      <Alert show={alertShow} onClose={alertDismiss} dismissible variant="success">
        {alertMessage}
      </Alert>
    </>
  );
};

export default User;
