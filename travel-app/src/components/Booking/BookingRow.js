import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useGet, useDelete } from "../_Hooks/Customs";
import { URL_BOOKINKS, URL_TRAVELS, URL_USERS } from "../_Utils/Costants";
import "./BookingRow.css";

const BookingRow = ({ booking, deleteSuccess }) => {
  const { data: travel } = useGet(URL_TRAVELS, booking.idTravel);
  const { data: user } = useGet(URL_USERS, booking.idUser);

  const deleteData = useDelete(URL_BOOKINKS, booking.id);
  const performDelete = () => {
    deleteData(deleteSuccess);
  };

  return (
    <tr className="booking-row">
      <td className="booking-row-actions">
        <Link className="booking-row-link" to={"edit/" + booking.id}>
          <FontAwesomeIcon icon={faPaintBrush} />
        </Link>
        <button className="booking-row-button" onClick={performDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
      <td className="booking-row-details">
        <div className="booking-row-id">{booking.id}</div>
        <div className="booking-row-destination">
          {travel ? travel.destination : ""}
        </div>
      </td>
      <td className="booking-row-user">{user ? user.name : booking.idUser}</td>
      <td className="booking-row-people">{booking.numberPeople}</td>
      <td className="booking-row-date">{booking.datePrenotation}</td>
    </tr>
  );
};

export default BookingRow;
