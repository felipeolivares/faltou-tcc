import React from "react";
import { Box, Paper } from "@material-ui/core";
import { TextField, Typography, Button } from "@mui/material";

import useStyles from "../styles";

const Register: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerLogin}>
      <Paper elevation={3} className={classes.loginPage}>
        <Box className={classes.loginMsg}>
          <Typography variant="h4" fontWeight="bold">
            Login
          </Typography>
        </Box>
        <Box className="pt16">
          <TextField
            id="dentistName"
            name="dentistName"
            // value={formik.values.dentistName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            label="Informe seu login"
            placeholder="Informe seu login"
            autoComplete="off"
            fullWidth
          />
        </Box>
        <Box className="pt10">
          <TextField
            id="dentistName"
            name="dentistName"
            // value={formik.values.dentistName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            label="Informe sua senha"
            placeholder="Informe sua senha"
            autoComplete="off"
            fullWidth
          />
        </Box>
        <Box className="pt10">
          <Button
            id="searchbtn"
            color="primary"
            variant="contained"
            className="btn-height"
            onClick={() => console.log("teste")}
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
          <Typography fontSize="12px" className={classes.createAccount}>
            Crie uma conta.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
