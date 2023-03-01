import React from "react";
import * as Yup from "yup";
import { Box, Paper } from "@material-ui/core";
import { TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";
import logo from "assets/Logo.png";
import backIcon from "assets/BackIcon.png";
import { useFormik } from "formik";
import axios from "axios";

import useStyles from "../styles";

const Register: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const appValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Campo Obrigatório"),
      password: Yup.string().required("Campo Obrigatório"),
      confirmPassword: Yup.string().required("Campo Obrigatório"),
    }),
    initialValues: appValues,
    validateOnChange: false,

    onSubmit: (values: any) => {
      if (values.email && values.password) {
        axios
          .post("http://localhost:3001/register", {
            email: values.email,
            password: values.password,
          })
          .then((response) => {
            console.log("response ", response);
          })
          .catch((error) => {
            console.log("error ", error);
          });
      }
    },
  });

  const onClickValue = () => {
    navigate(routes.login);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className={classes.containerLogin}>
        <Paper elevation={3} className={classes.loginPage}>
          <Box className={classes.loginMsg}>
            <img className={classes.containerImage} alt="iconPlus" src={logo} />
            <Typography variant="h4" fontWeight="bold">
              Cadastro
            </Typography>
          </Box>
          <Box className="pt16">
            <TextField
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.email && !!formik.errors.email}
              label="Informe seu e-mail"
              placeholder="Informe seu e-mail"
              autoComplete="off"
              fullWidth
            />
          </Box>
          <Box className="pt12">
            <TextField
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.password && !!formik.errors.password}
              label="Informe sua senha"
              placeholder="Informe sua senha"
              autoComplete="off"
              fullWidth
            />
          </Box>
          <Box className="pt12">
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                !!formik.touched.confirmPassword &&
                !!formik.errors.confirmPassword
              }
              label="Confirme sua senha"
              placeholder="Confirme sua senha"
              autoComplete="off"
              fullWidth
            />
          </Box>
          <Box className="pt12">
            <Button
              id="searchbtn"
              color="primary"
              variant="contained"
              className="btn-height"
              type="submit"
              fullWidth
            >
              <Typography variant="caption" fontWeight="bold">
                Cadastrar
              </Typography>
            </Button>
          </Box>
          <Box className={classes.containerBack} onClick={() => onClickValue()}>
            <Box className={classes.imageBackIcon}>
              <img alt="backIcon" src={backIcon} />
            </Box>
            <Typography
              fontSize="12px"
              fontWeight="bold"
              color="#0061A0"
              paddingTop={"3px"}
            >
              VOLTAR
            </Typography>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};

export default Register;
