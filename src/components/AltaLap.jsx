import React from "react";
import Swal from "sweetalert2";
import { HashLoader } from "react-spinners";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Container } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import Area from "./Area";
import { altaRegistro } from "../api/alta.js";
import PuestoSistemas from "./PuestoSistemas";
import PuestoContabilidad from "./PuestoContabilidad";
import PuestoOperaciones from "./PuestoOperaciones";
import PuestoRh from "./PuestoRh";
import PuestoPt from "./PuestoPt";

const AltaLap = () => {
  const [usuario, setUsuario] = useState("".toUpperCase());
  const [nombre, setNombre] = useState("");
  const [status, setStatus] = useState("");
  const [hostname, setHostname] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [oficina, setOficina] = useState("");
  const [dominio, setDominio] = useState("");
  const [area, setArea] = useState("");
  const [puesto, setPuesto] = useState("");
  const [compArea, setCompArea] = useState("");
  const [colorUsuario, setColorUsuario] = useState("");
  const [colorNombre, setColorNombre] = useState("");
  const [colorStatus, setColorStatus] = useState("");
  const [colorHostname, setColorHostname] = useState("");
  const [colorSerialNumber, setColorSerialNumber] = useState("");
  const [colorOficina, setColorOficina] = useState("");
  const [colorDominio, setColorDominio] = useState("");
  const [spinner, setSpinner] = useState(false);

  const objAlta = {
    usuario,
    nombre,
    status,
    hostname,
    serialNumber,
    oficina,
    dominio,
    area,
    puesto,
  };
  const handleUsuario = (e) => {
    setUsuario(e.target.value);
    !e.target.value ? setColorUsuario("warning") : setColorUsuario("success");
  };
  const handleNombre = (e) => {
    setNombre(e.target.value);
    !e.target.value ? setColorNombre("warning") : setColorNombre("success");
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
    !e.target.value ? setColorStatus("warning") : setColorStatus("success");
  };
  const handleHostname = (e) => {
    setHostname(e.target.value);
    !e.target.value ? setColorHostname("warning") : setColorHostname("success");
  };
  const handleSerialNumer = (e) => {
    setSerialNumber(e.target.value);
    !e.target.value
      ? setColorSerialNumber("warning")
      : setColorSerialNumber("success");
  };
  const handleOficina = (e) => {
    setOficina(e.target.value);
    !e.target.value ? setColorOficina("warning") : setColorOficina("success");
  };
  const handleDominio = (e) => {
    setDominio(e.target.value);
    !e.target.value ? setColorDominio("warning") : setColorDominio("success");
  };
  const alta = () => {
    if (Object.values(objAlta).some((x) => x === "")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Falta informacion",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      setSpinner(true);
      altaRegistro(objAlta);
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "Excelente!",
          text: "Se ha registrado correctamente",
        });
      }, 3100);
      setTimeout(() => {
        setSpinner(false);
      }, 3000);
    }
    setUsuario("");
    setNombre("");
    setStatus("");
    setHostname("");
    setSerialNumber("");
    setOficina("");
    setDominio("");
    setArea("");
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center w-100">
        <header>Alta</header>
        <Container
          maxWidth="sm"
          className="d-flex flex-column mt-4 flex-wrap h-50"
        >
          {usuario.length >= 1 ? (
            <TextField
              color={colorUsuario}
              className="m-2"
              label="Usuario"
              variant="outlined"
              value={usuario}
              onChange={handleUsuario}
              focused
            />
          ) : (
            <TextField
              color={colorUsuario}
              className="m-2"
              label="Usuario"
              variant="outlined"
              value={usuario}
              onChange={handleUsuario}
            />
          )}
          {nombre.length >= 1 ? (
            <TextField
              color={colorNombre}
              className="m-2"
              label="Nombre"
              variant="outlined"
              value={nombre}
              onChange={handleNombre}
              focused
            />
          ) : (
            <TextField
              color={colorNombre}
              className="m-2"
              label="Nombre"
              variant="outlined"
              value={nombre}
              onChange={handleNombre}
            />
          )}
          <FormControl className="m-2">
            <InputLabel id="demo-simple-select-label">Estatus</InputLabel>

            <Select
              color={colorStatus}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={handleStatus}
              label="Estatus"
            >
              <MenuItem value={"Activo"}>Activo</MenuItem>
              <MenuItem value={"Inactivo"}>Inactivo</MenuItem>
            </Select>
          </FormControl>
          {hostname.length >= 1 ? (
            <TextField
              color={colorHostname}
              className="m-2"
              id="outlined-basic"
              label="Hostname"
              variant="outlined"
              value={hostname}
              onChange={handleHostname}
              focused
            />
          ) : (
            <TextField
              color={colorHostname}
              className="m-2"
              id="outlined-basic"
              label="Hostname"
              variant="outlined"
              value={hostname}
              onChange={handleHostname}
            />
          )}
          {serialNumber.length >= 1 ? (
            <TextField
              color={colorSerialNumber}
              className="m-2"
              id="outlined-basic"
              label="Serial Number"
              variant="outlined"
              value={serialNumber}
              onChange={handleSerialNumer}
              focused
            />
          ) : (
            <TextField
              color={colorSerialNumber}
              className="m-2"
              id="outlined-basic"
              label="Serial Number"
              variant="outlined"
              value={serialNumber}
              onChange={handleSerialNumer}
            />
          )}
          <FormControl className="m-2">
            <InputLabel id="demo-simple-select-label">Oficina</InputLabel>
            <Select
              color={colorOficina}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={oficina}
              onChange={handleOficina}
              label="Oficina"
            >
              <MenuItem value={"Aimbridge"}>Aimbridge</MenuItem>
              <MenuItem value={"Tactik"}>Tactik</MenuItem>
            </Select>
          </FormControl>
          {oficina == "Aimbridge" ? (
            <FormControl className="m-2">
              <InputLabel id="demo-simple-select-label">Dominio</InputLabel>
              <Select
                color={colorDominio}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dominio}
                onChange={handleDominio}
                label="Dominio"
              >
                <MenuItem value={"Aimbridge"}>Aimbridge</MenuItem>
                <MenuItem value={"Prisma"}>Prisma</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <FormControl className="m-2">
              <InputLabel id="demo-simple-select-label">Dominio</InputLabel>
              <Select
                color={colorDominio}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dominio}
                onChange={handleDominio}
                label="Dominio"
              >
                <MenuItem value={"Aimbridge"}>Aimbridge</MenuItem>
                <MenuItem value={"Tactik"}>Tactik</MenuItem>
              </Select>
            </FormControl>
          )}
          <Area setArea={setArea} setCompArea={setCompArea} area={area}></Area>
          {area == "Sistemas y Tecnologia" ? (
            <PuestoSistemas
              compArea={compArea}
              setPuesto={setPuesto}
            ></PuestoSistemas>
          ) : area == "Contabilidad" ? (
            <PuestoContabilidad
              compArea={compArea}
              setPuesto={setPuesto}
            ></PuestoContabilidad>
          ) : area == "Operaciones" ? (
            <PuestoOperaciones
              compArea={compArea}
              setPuesto={setPuesto}
            ></PuestoOperaciones>
          ) : area == "Recursos Humanos" ? (
            <PuestoRh compArea={compArea} setPuesto={setPuesto}></PuestoRh>
          ) : area == "Prisma Tech" ? (
            <PuestoPt compArea={compArea} setPuesto={setPuesto}></PuestoPt>
          ) : (
            ""
          )}
        </Container>
        {!spinner ? (
          <Button variant="outlined" onClick={alta} className="w-25">
            Alta
          </Button>
        ) : (
          <HashLoader color="#275baf" size={40} speedMultiplier={2} />
        )}
      </div>
    </>
  );
};

export default AltaLap;
