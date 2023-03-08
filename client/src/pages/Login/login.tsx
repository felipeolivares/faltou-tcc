import React, { useState } from "react";
import * as Yup from "yup";
import { Box, Paper } from "@material-ui/core";
import {
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";
import logo from "assets/Logo.png";
import useStyles from "../styles";
import { useFormik } from "formik";
import loginService from "services/loginService";
import Loading from "components/Loading";
import { VisibilityOff, Visibility } from "@material-ui/icons";

const Login: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const appValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Precisa ser um e-mail válido")
        .required("Campo obrigatório"),
      password: Yup.string().required("Campo obrigatório"),
    }),
    initialValues: appValues,
    validateOnChange: false,

    onSubmit: (values: any) => {
      if (values.email && values.password) {
        setLoading(true);
        loginService
          .postLogin(values.email, values.password)
          .then(() => {
            navigate(routes.calculate);
          })
          .catch((error) => {
            formik.setFieldError("email", error?.response?.data?.msg);
            formik.setFieldError("password", error?.response?.data?.msg);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    },
  });

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const onClickValue = () => {
    navigate(routes.register);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Loading loading={loading} />
      <Box className={classes.containerLogin}>
        <Paper elevation={3} className={classes.loginPage}>
          <Box className={classes.loginMsg}>
            <img className={classes.containerImage} alt="brand" src={logo} />
            <Typography variant="h4" fontWeight="bold">
              Login
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
              helperText={formik.errors.email}
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
              helperText={formik.errors.password}
              label="Informe sua senha"
              placeholder="Informe sua senha"
              autoComplete="off"
              fullWidth
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box className="pt12">
            <Button
              id="enterbtn"
              color="primary"
              variant="contained"
              className="btn-height"
              type="submit"
              fullWidth
            >
              <Typography variant="caption" fontWeight="bold">
                Entrar
              </Typography>
            </Button>
          </Box>
          <Box className={classes.register}>
            <Typography fontSize="12px">Não é registrado?</Typography>
            <Typography
              fontSize="12px"
              className={classes.createAccount}
              onClick={onClickValue}
              id="registerClick"
            >
              Crie uma conta.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};

export default Login;
