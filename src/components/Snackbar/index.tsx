/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Alert, Snackbar, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-store/redux-store";
import { snackbarActions } from "../../redux-store/slices/snackbarSlice";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state: RootState) => state.snackbar);

  const handleSnackbarClose = () => {
    dispatch(snackbarActions.handleSnackbarClose());
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Snackbar
      open={snackbar.isSnackbarOpen}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      anchorOrigin={{
        vertical: isSmallScreen ? "top" : "bottom",
        horizontal: isSmallScreen ? "center" : "left",
      }}
      sx={{
        width: {
          xs: "90%",
          sm: "80%",
          md: "60%",
        },
        left: isSmallScreen ? "50%" : "auto",
        transform: isSmallScreen ? "translateX(-50%)" : "none",
      }}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity={snackbar.snackbarSeverity}
        variant="filled"
        sx={{
          fontSize: {
            xs: "12px",
            sm: "14px",
          },
        }}
      >
        {snackbar.snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default Index;
