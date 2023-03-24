import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import areas from "../db/areas.json";
const AreaEdit = ({setArea, setCompArea, area}) => {

    const handleArea = ({inputProps}) =>{
        setArea(inputProps.value)
        setCompArea(inputProps.value)
    }
  return (
    <Autocomplete
      className="m-2"
      value={area}
      disablePortal
      options={areas}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Area" onChange={handleArea(params)}/>}
    />
  );
};

export default AreaEdit;
