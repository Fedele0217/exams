import React from 'react'
import { URL_TRAVELS } from '../_Utils/Costants';
import TravelsForm from './TravelsForm';
import { useParams } from "react-router-dom";
import { useGet } from "../_Hooks/Customs";

const EditTravels = () => {
  const { id } = useParams();
  const { data, error, mutate } = useGet(URL_TRAVELS, id);

  if(data) {
    return (
      <div className="container">
      <div>Modifica viaggio</div>
      <TravelsForm data={data} mutate={mutate} />
      </div>

    )
  }

}

export default EditTravels