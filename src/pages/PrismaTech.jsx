import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { llamada } from "../api/llamada";
import { HashLoader } from "react-spinners";
import ModalEdit from "../components/ModalEdit";
import Swal from "sweetalert2";

const PrismaTech = () => {
  const { data } = useLoaderData();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [modal, setModal] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [registros, setRegistros] = useState([]);
  const arr = [];

  const llamarRegistro = async (id) => {
    const response = await llamada(id);
    setRegistros(response);
    setModal(true);
    setSpinner(false);
  };

  data.map((item) => {
    item.area == "Prisma Tech" ? arr.push(item) : "";
  });
  const verificar = () => {
    if (rowSelectionModel.length > 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Solo puedes seleccionar uno",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (rowSelectionModel.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Selecciona un registro",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      setSpinner(true);
      setTimeout(() => {
        llamarRegistro(rowSelectionModel);
      }, 3000);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "usuario",
      headerName: "Usuario",
      width: 150,
      editable: true,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Estatus",
      width: 150,
      editable: true,
    },
    {
      field: "hostname",
      headerName: "Hostname",
      width: 150,
      editable: true,
    },
    {
      field: "serialNumber",
      headerName: "Serial Numer",
      width: 150,
      editable: true,
    },
    {
      field: "oficina",
      headerName: "oficina",
      width: 150,
      editable: true,
    },
    {
      field: "dominio",
      headerName: "Dominio",
      width: 150,
      editable: true,
    },
    {
      field: "area",
      headerName: "Area",
      width: 150,
      editable: true,
    },
    {
      field: "puesto",
      headerName: "Puesto",
      width: 150,
      editable: true,
    },
  ];
  return (
    <>
      <div className="w-auto overflow-hidden d-flex justify-content-center">
        <Box sx={{ width: "90%", marginTop: 3}}>
          <DataGrid
            autoHeight
            rows={arr}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
            disableRowSelectionOnClick
          ></DataGrid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={verificar}>Eliminar</Button>
              <Button onClick={verificar}>Edit</Button>
            </ButtonGroup>
          </Box>
          {!spinner ? (
            <ModalEdit
              setModal={setModal}
              modal={modal}
              registros={registros}
            ></ModalEdit>
          ) : (
            <HashLoader color="#275baf" size={40} speedMultiplier={2} />
          )}
        </Box>
      </div>
    </>
  );
};

export default PrismaTech;
export const loaderPt = async () => {
  const response = await fetch("http://localhost:3000/altas");
  const data = await response.json();

  return { data };
};
