import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

const NewBooking = () => {
  const navigate = useNavigate();

  // Funzione per gestire l'invio del form
  const handleSubmit = async (bookingData) => {
    try {
      // Effettua la chiamata API per inviare i dati al server
      const response = await fetch("http://localhost:3432/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        // Il salvataggio è stato completato con successo
        // Puoi navigare a una nuova pagina dopo il salvataggio
        navigate("/bookings");
      } else {
        // La chiamata API non è andata a buon fine
        throw new Error("Errore durante il salvataggio");
      }
    } catch (error) {
      // Gestisci l'errore di salvataggio
      console.error("Errore durante il salvataggio:", error);
    }
  };

  return (
    <div className="m-2 p-2 border">
      <h3>Nuova prenotazione</h3>
      <BookingForm onSubmit={handleSubmit} />
      <div className="mt-2">
        {/* Link per annullare la creazione della prenotazione */}
        <Link to="/bookings" className="btn btn-outline-danger">
          Annulla
        </Link>
      </div>
    </div>
  );
};

export default NewBooking;
