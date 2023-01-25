import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  containerBrand: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBack: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "8px",
    cursor: "pointer",
  },
  text: {
    color: "#0061A0",
    fontSize: "16px",
    fontFamily: "'NotoSans-Bold', Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    paddingLeft: "5px",
  },
  imageBackIcon: {
    width: "24px",
    heigth: "24px",
    paddingTop: "2px",
  },
}));

export default useStyles;
