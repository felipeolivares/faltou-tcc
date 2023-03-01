import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  divider: {
    marginLeft: "-24px",
    marginRight: "-24px",
    paddingTop: "24px",
  },
  containerImage: {
    width: "100px",
    height: "100px",
  },
  containerLogin: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginPage: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 64px",
  },
  loginMsg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "24px",
  },
  register: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "4px",
  },
  createAccount: {
    color: "blue",
    paddingLeft: "2px",
    textDecoration: "underline",
    cursor: "pointer",
  },
  containerBack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "12px",
    paddingRight: "24px",
    cursor: "pointer",
  },
  imageBackIcon: {
    width: "24px",
    heigth: "24px",
  },
}));

export default useStyles;
