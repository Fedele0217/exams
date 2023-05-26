import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGet } from "../_Hooks/Customs";
import BookingForm from "./BookingForm";
import { URL_BOOKINKS } from "../_Utils/Costants";

const EditBooking = () => {
  // Ottieni l'ID della prenotazione dalla URL
  const { id } = useParams();

  // Stato per memorizzare i dati della prenotazione
  const [bookingData, setBookingData] = useState(null);

  // Utilizza il hook personalizzato useGet per ottenere i dati della prenotazione specificata dall'ID
  const { data, mutate } = useGet(URL_BOOKINKS, id);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setBookingData(data);
    }
  }, [data]);

  // Funzione per gestire l'invio del form
  const handleSubmit = (booking) => {
    // Aggiorna la prenotazione nel database
    

    navigate("/bookings"); // Reindirizza alla pagina delle prenotazioni dopo l'aggiornamento
  };

  return (
    <div className="m-2 border">
      <h3>Modifica prenotazione</h3>
      {bookingData ? (
        <BookingForm data={bookingData} onSubmit={handleSubmit} mutate={mutate} />
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
};

export default EditBooking;
