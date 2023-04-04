import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Modal = styled(Box)({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '500px',
  height: '100%',
  maxHeight: '500px',
  backgroundColor: 'white',
  borderRadius: '10px',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem'
});

export default Modal;
