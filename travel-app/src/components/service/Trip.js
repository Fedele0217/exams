import React from "react";
import "./TripStyle.css";
import TripData from "./TripData";

import indonesiaImage from "../../assets/5.jpg";
import malaysiaImage from "../../assets/8.jpg";
import franceImage from "../../assets/6.jpg";


function Trip() {
  return (
    <div className="trip">
      <h1>Viaggi recenti</h1>
      <p></p>
      <div className="tripcard">
        <TripData
          image={indonesiaImage}
          heading="Viaggio in Indonesia"
          text="L'Indonesia, ufficialmente la Repubblica dell'Indonesia, è un paese in Sud-est asiatico e Oceania tra gli oceani Indiano e Pacifico. Esso è costituito da oltre 17.000 isole, tra cui Sumatra, Giava, Sulawesi, e parti del Borneo e della Nuova Guinea."
        />
        <TripData
          image={malaysiaImage}
          heading="Viaggio in Malaysia"
          text="La Malesia è un paese del sud-est asiatico che occupa parti della penisola malese e l'isola del Borneo. È noto per le sue spiagge, le foreste pluviali e il mix di influenze culturali malesi, cinesi, indiane ed europee."
        />
        <TripData
          image={franceImage}
          heading="Viaggi in France"
          text="La Francia, nell'Europa occidentale, comprende città medievali, villaggi alpini e spiagge mediterranee. Parigi, la sua capitale, è famosa per le sue case di moda, i musei d'arte classica tra cui il Louvre e monumenti come la Torre Eiffel."
        />
      </div>
    </div>
  );
}

export default Trip;
