import React from 'react'
import {Typography,Modal,Box } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Create() {
  const [openM, setOpenM] = React.useState(false);
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);
  return (

    <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openM}
      onClose={handleCloseM}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openM}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  </div>
    )
}
