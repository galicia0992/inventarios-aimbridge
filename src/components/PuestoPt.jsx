import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import puestos from "../db/puestos.json";

const PuestoPt = ({ setPuesto, puesto }) => {
  const arrPt = puestos.filter((item) => item.puesto == "Prisma Tech");

  const handlePuesto = ({ inputProps }) => {
    setPuesto(inputProps.value);
  };

  return (
    <Autocomplete
      value={puesto}
      className="m-2"
      disablePortal
      options={arrPt}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Puesto" onChange={handlePuesto(params)} />
      )}
    />
  );
};

export default PuestoPt;
