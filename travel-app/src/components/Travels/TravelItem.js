import { Link } from "react-router-dom";
import { useDelete } from "../_Hooks/Customs";
import { useState } from "react";
import React from "react";
import { URL_TRAVELS } from "../_Utils/Costants";
import Card from "react-bootstrap/Card";
import "./TravelStyle.css"

const TravelItem = ({ travels, deleteSuccess }) => {
  const base64prefix = "data:image/jpeg;base64,";
  const [showDelete, setShowDelete] = useState(false);
  const deleteData = useDelete(URL_TRAVELS, travels?.id, {
    onSuccess: () => {
      deleteSuccess();
    },
  });

  const performDelete = async () => {
    await deleteData();
    setShowDelete(false);
  };

  const formatDate = (date) => {
    return date.split("T")[0]; // Ottieni solo la data senza ore, minuti e secondi
  };

  return (
    <article className="col-6">
      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={base64prefix + travels.imageTravel} />
        <Card.Body>
          <Card.Title>{travels?.destination}</Card.Title>
          <Card.Text>
            <div>Data di partenza: {formatDate(travels?.dateStart)}</div>
            <div>Data di ritorno: {formatDate(travels?.dateReturn)}</div>
            <div>Mezzo di trasporto: {travels?.meansTransport}</div>
            <div>Città di partenza: {travels?.departureCity}</div>
            <div>Prezzo: {travels?.price}</div>
            <div>{travels?.isDeleted}</div>
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Link className="btn btn-outline-info" to={"/bookings"}>
              Prenota
            </Link>
            <Link className="btn btn-outline-info" to={`edit/${travels?.id}`}>
              Modifica
            </Link>
            <button
              className="btn btn-outline-danger"
              onClick={() => setShowDelete(true)}
            >
              Elimina
            </button>
          </div>
        </Card.Body>
      </Card>

      {showDelete && (
        <div className="col-12 mt-2">
          <div className="alert alert-danger" role="alert">
            <p>Eliminare {travels?.name}?</p>
            <div className="d-flex justify-content-end">
              <button className="btn btn-success btn-sm me-2" onClick={performDelete}>
                Conferma
              </button>
              <button
                className="btn btn-danger btn-sm me-2"
                onClick={() => setShowDelete(false)}
              >
                Annulla
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default TravelItem;
