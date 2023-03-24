import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { Box } from "@mui/system";
import Modificar from './Modificar';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ModalEdit = ({setModal, modal, registros}) => {
  console.log(registros)
  const [skeleton, setSkeleton] = useState(false)
  const style = {
    position: 'absolute',
    display: "flex",
    flexWrap:"wrap",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 500,
    bgcolor: 'white',
    boxShadow: 24,
    p: 2,
  };
  const skeletonStyle = {
    display:"flex",
    flexWrap:"wrap",
    width: 900,
    height: 500,
  }
  
  
  return (
    <>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal}
        onClose={() =>(setModal(false))}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modal}>
          <Box sx={style}>
            {
              skeleton ? <Modificar
              registros={registros}
              setModal={setModal}
              ></Modificar>:
              <div className="d-flex flex-column align-items-center w-100">
                <Stack spacing={1} sx={style}>
              <Skeleton variant="text" width={210} height={70} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={210} height={70} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={210} height={70} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={210} height={70} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={210} height={70} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={210} height={70} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={210} height={70} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={210} height={70} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={210} height={70} sx={{ fontSize: '1rem' }} />
              </Stack>
              </div>
            }
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ModalEdit