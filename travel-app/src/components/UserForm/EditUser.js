// EditUser.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useGet } from "../_Hooks/Customs";
import { URL_USERS } from "../_Utils/Costants";
import UserForm from "./UserForm";
import "./UserForm.css"

const EditUser = () => {
  const { id } = useParams();
  const { data, error, mutate } = useGet(URL_USERS, id);

  if (data) {
    return (
      <div className="container">
        <h5>Modifica Utente</h5>
        <UserForm data={data} mutate={mutate} />
      </div>
    );
  }
 
};

export default EditUser;
