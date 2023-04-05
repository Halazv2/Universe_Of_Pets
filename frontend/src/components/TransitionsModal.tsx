import * as React from 'react';
import { Box, styled, Theme } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Fade from '@mui/material/Fade';
import Button from '@mui/base/ButtonUnstyled';

const BackdropUnstyled = React.forwardRef<HTMLDivElement, { open?: boolean }>((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme: Theme) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '2px solid currentColor',
  boxShadow: 24,
  padding: '16px 32px 24px 32px'
});

type props = {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
};

export default function TransitionsModal({ open, handleClose, children }: props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      sx={{ overflow: 'scroll', padding: '0' }}
    >
      <Fade
        in={open}
        sx={{
          backgroundColor: 'white',
          width: '60%',
          marginTop: '1rem'
        }}
      >
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
}
