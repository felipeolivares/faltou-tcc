import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  divider: {
    marginLeft: "-24px",
    marginRight: "-24px",
    paddingTop: "24px",
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
    padding: "54px",
  },
  loginMsg: {
    display: "flex",
    justifyContent: "center",
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
}));

export default useStyles;
