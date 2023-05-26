import { Link, Outlet } from "react-router-dom";
import { useGet } from "../_Hooks/Customs";
import Alert from "../Alert/Alert";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { URL_BOOKINKS } from "../_Utils/Costants";
import BookingRow from "./BookingRow";
import "./Booking.scss";


const Booking = () => {
  // Utilizzo del hook personalizzato useGet per ottenere i dati delle prenotazioni
  const { data, error, isLoading, mutate } = useGet(URL_BOOKINKS);

  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Funzione per nascondere l'alert
  const alertDismiss = () => {
    setAlertShow(false);
    mutate();
  };

  // Funzione per gestire l'eliminazione con successo di una prenotazione
  const deleteSuccess = () => {
    setAlertMessage("Eliminazione completata");
    setAlertShow(true);
  };

  if (data) {
    // Se sono presenti dati delle prenotazioni
    return (
      <div className="container">
        <h3>Elenco Prenotazioni</h3>
        {/* Link per aggiungere una nuova prenotazione */}
        <Link to="/new" className="btn btn-primary mb-2">Add booking</Link>
        {/* Outlet per le rotte figlie */}
        <Outlet context={{ mutate }} />
        <Table responsive>
          <thead>
            <tr>
              <th>id Prenotazione</th>
              <th>Destinazione</th>
              <th>Utente</th>
              <th>Numero Persone</th>
              <th>Data di prenotazione</th>
            </tr>
          </thead>
          <tbody>
            {/* Mappatura dei dati delle prenotazioni per renderizzare le righe della tabella */}
            {data.map(booking => (
              <BookingRow
                key={booking.id}
                booking={booking}
                deleteSuccess={deleteSuccess}
              />
            ))}
          </tbody>
        </Table>
        {/* Componente Alert per mostrare messaggi */}
        <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
      </div>
    );
  } else if (isLoading) {
    // Se il caricamento è in corso, mostra l'indicatore di caricamento
    return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
  } else if (error) {
    // Se si verifica un errore durante il caricamento dei dati
    return <div>Errore di caricamento</div>;
  } else {
    // Se non ci sono dati disponibili, non mostra nulla
    return null;
  }
}

export default Booking;
