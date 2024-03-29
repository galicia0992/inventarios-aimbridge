import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import areas from "../db/areas.json";
const Area = ({setArea}) => {
  
    const handleArea = ({inputProps}) =>{
        setArea(inputProps.value)
    }
  return (
    <Autocomplete
      className="m-2"
      disablePortal
      options={areas}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Area" onChange={handleArea(params)}/>}
    />
  );
};

export default Area;
