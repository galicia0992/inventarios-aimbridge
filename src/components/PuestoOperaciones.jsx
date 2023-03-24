import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import puestos from "../db/puestos.json";
const PuestoOperaciones = ({ setPuesto, puesto }) => {
  const arrOperaciones = puestos.filter((item) => item.puesto == "Operaciones");

  const handlePuesto = ({ inputProps }) => {
    setPuesto(inputProps.value);
  };

  return (
    <Autocomplete
      value={puesto}
      className="m-2"
      disablePortal
      options={arrOperaciones}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Puesto" onChange={handlePuesto(params)} />
      )}
    />
  );
};

export default PuestoOperaciones;
