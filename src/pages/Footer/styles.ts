import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  image1: {
    display: "flex",
    justifyContent: "right",
    width: "200px",
  },
  image2: {
    display: "flex",
    justifyContent: "right",
    marginTop: "12px",
    marginLeft: "15px",
    width: "auto",
  },
  image1Mob: {
    display: "flex",
    justifyContent: "left",
    width: "auto",
  },
  image2Mob: {
    display: "flex",
    justifyContent: "left",
    marginTop: "12px",
    marginLeft: "15px",
    width: "auto",
  },
}));

export default useStyles;
