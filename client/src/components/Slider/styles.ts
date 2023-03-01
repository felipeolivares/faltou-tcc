import { makeStyles } from "@material-ui/core/styles";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const StyledSlider = styled(Slider)({
  height: "10px",
  "& .MuiSlider-track": {
    border: "none",
    borderRadius: "0px",
  },
  "& .MuiSlider-rail": {
    borderRadius: "0px",
    opacity: 1,
    backgroundColor: "#D9D9D6",
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 18,
    fontFamily: "'NotoSans-Bold', Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    top: -6,
    backgroundColor: "unset",
    color: "#333333",
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: "#333333",
    },
  },
  "& .MuiSlider-thumb": {
    height: 40,
    width: 40,
  },
});

export default useStyles;
