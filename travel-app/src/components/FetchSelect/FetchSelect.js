import React from "react";
import { useGet } from "../_Hooks/Customs";

const FetchSelect = ({ className, name, value, onChange, url }) => {
  // Utilizza il hook personalizzato useGet per ottenere i dati dalla URL specificata
  const { data } = useGet(url);

  if (data) {
    // Se sono presenti dati, mostra il componente select con le opzioni
    return (
      <select
        className={className}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value={0}>--- Seleziona ---</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.destination}
            {item.name}
            {item.datePrenotation}
          </option>
        ))}
      </select>
    );
  }

  // Se non ci sono dati disponibili, mostra solo l'opzione di selezione predefinita
  return (
    <select className={className}>
      <option value={0}>--- Seleziona ---</option>
    </select>
  );
};

export default FetchSelect;
