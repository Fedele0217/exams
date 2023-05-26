import React, { useState } from "react";
import { usePost } from "../_Hooks/Customs";
import FetchSelect from "../FetchSelect/FetchSelect";
import Alert from "../Alert/Alert";
import { URL_BOOKINKS } from "../_Utils/Costants";
import "./BookingForm.css";

const BookingForm = ({ onSubmit }) => {
  const [booking, setBooking] = useState({
    numberPeople: 0,
    idUser: 0,
    idTravel: 0,
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const postData = usePost(URL_BOOKINKS);

  const handleChange = (e) => {
    setBooking((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]:
        e.target.value.trim() === "" ? "Questo campo è obbligatorio" : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(fieldErrors).some((error) => error !== "");
    if (hasErrors) {
      return;
    }

    postData(booking, () => {
      setAlertMessage("Salvataggio completato!");
      setAlertShow(true);
      onSubmit();
    });
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h4 className="booking-form-title">* campi obbligatori</h4>
        <div className="form-group">
          <label className="form-label">Numero persone *</label>
          <input
            type="number"
            min={1}
            className={`form-control ${fieldErrors.numberPeople && "is-invalid"}`}
            name="numberPeople"
            value={booking.numberPeople}
            onChange={handleChange}
          />
          {fieldErrors.numberPeople && (
            <div className="invalid-feedback">{fieldErrors.numberPeople}</div>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Utente *</label>
          <FetchSelect
            className={`form-control ${fieldErrors.idUser && "is-invalid"}`}
            name="idUser"
            value={booking.idUser}
            onChange={handleChange}
            url={"http://localhost:3432/users"}
          />
          {fieldErrors.idUser && (
            <div className="invalid-feedback">{fieldErrors.idUser}</div>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Viaggio prenotato *</label>
          <FetchSelect
            className={`form-control ${fieldErrors.idTravel && "is-invalid"}`}
            name="idTravel"
            value={booking.idTravel}
            onChange={handleChange}
            url={"http://localhost:3432/travels"}
          />
          {fieldErrors.idTravel && (
            <div className="invalid-feedback">{fieldErrors.idTravel}</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">
            Salva
          </button>
        </div>
      </form>
      <Alert
        show={alertShow}
        onHide={() => setAlertShow(false)}
        message={alertMessage}
      />
    </div>
  );
};

export default BookingForm;
