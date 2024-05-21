import * as React from 'react';
import Box from "@mui/joy/Box";
import Snackbar, { SnackbarOrigin } from "@mui/joy/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar({ message, setIsOpen }) {
  const [state, setState] = React.useState<State>({
    open: true,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    setIsOpen(false)
  };

  setTimeout(() => {
    setIsOpen(false);
  }, 3000);
  
  return (
    <Box sx={{ width: 500 }}       
    >
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
        style={{backgroundColor: message.isSuccess ? 'rgb(220, 252, 231)' : 'rgb(252 165 165)'}}
      >
        {message.text}
      </Snackbar>
    </Box>
  );
}
