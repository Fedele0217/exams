import React, { useEffect, useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { usePost, usePut } from "../_Hooks/Customs";
import Alert from "../Alert/Alert";
import { URL_TRAVELS } from "../_Utils/Costants";
import "./TravelsForm.css";

const TravelsForm = ({ data }) => {
  const [travels, setTravels] = useState({
    destination: "",
    dateStart: null,
    dateReturn: null,
    departureCity: "",
    price: 0.0,
    isDeleted: false,
    imageTravel: "",
  });

  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();
  const postData = usePost(URL_TRAVELS);
  const putData = usePut(URL_TRAVELS, data?.id);

  useEffect(() => {
    if (data) {
      setTravels({
        destination: data.destination,
        dateStart: data.dateStart.split("T")[0],
        dateReturn: data.dateReturn.split("T")[0],
        meansTransport: data.meansTransport,
        departureCity: data.departureCity,
        price: data.price,
        isDeleted: data.isDeleted,
        imageTravel: "",
      });
    }
  }, [data]);

  const getBase64 = async (file) => {
    const base64prefix = "data:image/jpeg;base64,";

    var reader = new FileReader();
    await reader.readAsDataURL(file);
    reader.onload = function () {
      setTravels((prevValues) => {
        return {
          ...prevValues,
          imageTravel: reader.result.replace(base64prefix, ""),
        };
      });
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handleChange = (e) => {
    if (e.target.name === "imageTravel") {
      getBase64(e.target.files[0]);
    }
    setTravels((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (data && data.id) {
        putData(travels, () => {
          setAlertMessage("Modifica completata!");
          setAlertShow(true);
        });
      } else {
        postData(travels, () => {
          setAlertMessage("Viaggio aggiunto!");
          setAlertShow(true);
        });
      }
    } catch (error) {
      console.error("Errore durante il salvataggio:", error);
    }
  };

  const handleAlertDismiss = () => {
    setAlertShow(false);
    navigate("/travels");
  };

  return (
    <div className="travels-form-container">
      <form className="travels-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <FloatingLabel
            controlId="txtName"
            label="Destinazione"
            className="my-2"
          >
            <input
              id="txtName"
              className="form-control"
              name="destination"
              value={travels.destination}
              onChange={handleChange}
              placeholder="Destinazione"
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <FloatingLabel
            controlId="txtDateS"
            label="Data Partenza"
            className="my-2"
          >
            <input
              id="txtDateS"
              className="form-control"
              name="dateStart"
              
              value={travels.dateStart}
              onChange={handleChange}
              placeholder="Data partenza"
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <FloatingLabel
            controlId="txtDataR"
            
            label="Data ritorno"
            className="my-2"
          >
            <input
              id="txtDataR"
              className="form-control"
              name="dateReturn"
              
              value={travels.dateReturn}
              onChange={handleChange}
              placeholder="Data ritorno"
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <FloatingLabel
            controlId="txtDepartureCity"
            label="Città di partenza"
            className="my-2"
          >
            <input
              id="txtDepartureCity"
              className="form-control"
              name="departureCity"
              value={travels.departureCity}
              onChange={handleChange}
              placeholder="Città di partenza"
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <FloatingLabel
            controlId="txtMeans"
            label="Mezzo di trasporto"
            className="my-2"
          >
            <input
              id="txtmeans"
              className="form-control"
              name="meansTransport"
              value={travels.meansTransport}
              onChange={handleChange}
              placeholder="Mezzo di trasporto"
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <FloatingLabel controlId="txtPrice" label="Prezzo" className="my-2">
            <input
              id="txtPrice"
              className="form-control"
              name="price"
              value={travels.price}
              onChange={handleChange}
              placeholder="Prezzo (0.00)"
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <FloatingLabel controlId="txtSold" label="Sold Out" className="my-2">
            <input
              id="txtSold"
              className="form-control"
              name="isDeleted"
              value={travels.isDeleted}
              onChange={handleChange}
              placeholder="sold out (0,1)"
            />
          </FloatingLabel>
        </div>
        <div className="form-group">
          <label className="form-label">Immagine</label>
          <input
            className="form-control-file"
            type="file"
            name="imageTravel"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="btn-group">
            <button className="btn btn-success" type="submit">
              Salva
            </button>
            <Link className="btn btn-danger" to="/travels">
              Annulla
            </Link>
          </div>
        </div>
      </form>
      <Alert show={alertShow} onHide={handleAlertDismiss} message={alertMessage} />
    </div>
  );
};

export default TravelsForm;
