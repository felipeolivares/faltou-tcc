import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
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
    paddingTop: "4px",
    color: "#0061A0",
  },
}));

export default useStyles;
