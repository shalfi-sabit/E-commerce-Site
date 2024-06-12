/* eslint-disable react-hooks/rules-of-hooks */
import { Backdrop, CircularProgress } from "@mui/material";
import { RootState } from "../../redux-store/redux-store";
import { useSelector } from "react-redux";

const index = () => {
  const backdropSpinnerState = useSelector(
    (state: RootState) => state.backdropSpinner
  );

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: 100 }}
      open={backdropSpinnerState.isBackdropSpinnerOpen}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default index;
