import * as React from 'react';
import Box from "@mui/joy/Box";
import Snackbar, { SnackbarOrigin } from "@mui/joy/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

// style={{backgroundColor: 'rgb(252 165 165)'}} //error

export default function PositionedSnackbar({ text, setIsOpen }) {
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

  return (
    <Box sx={{ width: 500 }}       
    >
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
        style={{backgroundColor: 'rgb(220 252 231)'}}
      >
        {text}
      </Snackbar>
    </Box>
  );
}
