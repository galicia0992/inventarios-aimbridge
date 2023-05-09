import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import puestos from "../db/puestos.json";
const PuestoSistemas = ({ setPuesto, puesto }) => {
  const arrSistemas = puestos.filter(
    (item) => item.puesto.includes("Sistemas y Tecnologia")
  );

  const handlePuesto = ({ inputProps }) => {
    setPuesto(inputProps.value);
  };

  return (
    <Autocomplete
      value={puesto}
      className="m-2"
      disablePortal
      options={arrSistemas}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Puesto" onChange={handlePuesto(params)} />
      )}
    />
  );
};

export default PuestoSistemas;
