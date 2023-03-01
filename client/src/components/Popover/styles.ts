import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    fontFamily: "'NotoSans', Arial, Helvetica, sans-serif",
    fontSize: "12px",
    color: "#007ABC",
    cursor: "pointer",
  },
  ctnDescription: {
    marginTop: "10px",
    display: "flex",
    backgroundColor: "#F2F2F2",
  },
  description: {
    display: "flex",
    color: "#333333",
    fontFamily: "'NotoSans', Arial, Helvetica, sans-serif",
    fontSize: "12px",
    padding: "10px",
  },
}));

export default useStyles;
