import { useDelete, useGet } from "../_Hooks/Customs";
import { URL_USERS } from "../_Utils/Costants";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from 'react-bootstrap/Card';

const UserItem = ({ user, deleteSuccess }) => {
    const [showDelete, setShowDelete] = useState(false);
    const deleteData = useDelete(URL_USERS, user?.id, {
        onSuccess: () => {
            deleteSuccess();
        }
    });

    const performDelete = async () => {
        await deleteData();
        setShowDelete(false);
        window.location.reload();
      };
      

    return (

         <article className="col-3 ">
            <div className="m-1 p-1 border">
                <div className="row">
                    <div className="col-12">Nome: {user?.name}</div>
                    <div className="col-12">Cognome: {user?.surname}</div>
                    <div className="col-12">Email: {user?.email}</div>
                    <div className="col-12">Password: {user?.password}</div>
                    <div className="col-10">
                        <div className="d-flex justify-content-around">
                            <Link className="btn btn-outline-info" to={`edit/${user?.id}`}>
                                Modifica
                            </Link>
                            <button className="btn btn-outline-danger" onClick={() => setShowDelete(true)}>
                                Elimina
                            </button>
                        </div>
                    </div> 
                    {showDelete && (
                        <div className="col-12">
                            <div className="alert alert-danger mt-2" role="alert">
                                <p>Eliminare {user?.name}?</p>
                            
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-success btn-sm me-2" onClick={performDelete}>
                                        Conferma
                                    </button>
                                    <button className="btn btn-danger btn-sm me-2" onClick={() => setShowDelete(false)}>
                                        Annulla
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

export default UserItem;