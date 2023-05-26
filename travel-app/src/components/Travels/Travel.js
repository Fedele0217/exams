import { Link } from "react-router-dom";
import { useGet } from "../_Hooks/Customs";
import Alert from "../Alert/Alert";
import { useState } from "react";
import TravelItem from "./TravelItem";
import { URL_TRAVELS } from "../_Utils/Costants";
import TravelsForm from "../TravelsForm.js/TravelsForm";


const Travel = () => {

  const { data, error, mutate } = useGet(URL_TRAVELS);

  const [alertShow, setAlertShow] = useState(false);
  const [AlertMessage, setAlertMessage] = useState("");

  const alertDismiss = () => {
      setAlertShow(false);
      mutate();
  }

  const deleteSuccess = ()=> {
      setAlertMessage("Eliminazione avvenuta");
      setAlertShow(true);
  }


  if (data) {
      return (

          <>
              <div className="container">
                  <h5> Viaggi</h5>
                  <Link to="new" className=" my-5 btn btn-outline-success btn-sm">Nuovo Viaggio</Link>
                  <div className="row">
                      {data.map(Travels => (
                          <TravelItem key={Travels.id} travels={Travels}  deleteSuccess={deleteSuccess}/>
                      ))}
                  </div>
              </div>
              <Alert show={alertShow} onHide={alertDismiss} message={AlertMessage}/>
          </>


      );
  }
}

export default Travel