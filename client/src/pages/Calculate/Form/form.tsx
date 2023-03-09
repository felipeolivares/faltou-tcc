import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { TextField, Typography, Button, InputAdornment } from "@mui/material";
import useStyles from "./styles";
import { MLRadio } from "components";
import { useAppContext } from "context/useAppContext";

import { useFormik } from "formik";
import { allowNumbersOnly, removeSpecialCharsAndNumbers } from "utils";
import formValidate from "../validator/formValidate";

const Form: React.FC = () => {
  const classes = useStyles();
  const { appValues, updateAppValues } = useAppContext();

  const formik = useFormik({
    initialValues: appValues,
    validateOnChange: false,

    onSubmit: (values: any) => {
      updateAppValues(values);
    },
  });

  const handleSubmit = () => {
    const errors = formValidate(formik.values);
    if (errors) {
      formik.setErrors(errors);
    } else {
      updateAppValues(formik.values);
    }
  };

  return (
    <Paper elevation={3} className={classes.paperCalc}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="bold">
            Coloque os dados abaixo para calcular suas faltas:
          </Typography>
        </Grid>
        <Grid item xs={12} className="pt24">
          <TextField
            id="subject"
            name="subject"
            value={removeSpecialCharsAndNumbers(formik.values.subject || "")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.subject}
            helperText={formik.errors.subject}
            label="Nome da matéria"
            placeholder="Informe o nome da matéria"
            autoComplete="off"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className="pt16">
          <Typography variant="body1" fontWeight="bold" color="#FF0000">
            Atenção: Informe a data exata do início da aula da matéria.
          </Typography>
        </Grid>
        <Grid item xs={6} className="pt8">
          <TextField
            id="startClasses"
            name="startClasses"
            value={formik.values.startClasses}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.startClasses}
            helperText={formik.errors.startClasses}
            label="Data do início da matéria"
            placeholder="00/00/0000"
            autoComplete="off"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className="pt16">
          <Typography variant="body1" fontWeight="bold" color="#FF0000">
            Atenção: Informe a data exata do final da aula da matéria.
          </Typography>
        </Grid>
        <Grid item xs={6} className="pt8">
          <TextField
            id="finishClasses"
            name="finishClasses"
            value={formik.values.finishClasses}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.finishClasses}
            helperText={formik.errors.finishClasses}
            label="Data do fim da matéria"
            placeholder="00/00/0000"
            autoComplete="off"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className="pt16">
          <Typography variant="body1" fontWeight="bold">
            Quantidade de dias da semana que você terá aula da matéria.
          </Typography>
        </Grid>
        <Grid item xs={6} className="pt8">
          <TextField
            id="amountDaysClasses"
            name="amountDaysClasses"
            value={allowNumbersOnly(formik.values.amountDaysClasses || "")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.amountDaysClasses}
            helperText={formik.errors.amountDaysClasses}
            label="Quantidade de dias"
            placeholder="Informe a quantidade de dias"
            autoComplete="off"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className="pt16">
          <Typography variant="body1" fontWeight="bold">
            Quantidade de dias da semana que você faltou na matéria.
          </Typography>
        </Grid>
        <Grid item xs={6} className="pt8">
          <TextField
            id="amountAbsence"
            name="amountAbsence"
            value={allowNumbersOnly(formik.values.amountAbsence || "")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.amountAbsence}
            helperText={formik.errors.amountAbsence}
            label="Quantidade de dias"
            placeholder="Informe a quantidade de dias"
            autoComplete="off"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className="pt16">
          <Typography variant="body1" fontWeight="bold">
            Possuí algum feriado ou dia que não haverá aula?
          </Typography>
        </Grid>
        <Grid item xs={12} className="pt8">
          <MLRadio
            labelId="radioholiday"
            name="radioholiday"
            value1Radio="Sim"
            value2Radio="Não"
            value={formik.values.radioholiday}
            handleChange={formik.handleChange}
          />
        </Grid>
        {formik.values.radioholiday === "Sim" && (
          <Grid item xs={6} className="pt8">
            <TextField
              id="holiday"
              name="holiday"
              value={allowNumbersOnly(formik.values.holiday || "")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.holiday}
              helperText={formik.errors.holiday}
              label="Quantidade de dias"
              placeholder="Informe a quantidade de dias"
              autoComplete="off"
              fullWidth
            />
          </Grid>
        )}
        <Grid item xs={12} className="pt16">
          <Typography variant="body1" fontWeight="bold">
            Porcentagem mínima de frequência exigida é de 75%?
          </Typography>
        </Grid>
        <Grid item xs={12} className="pt8">
          <MLRadio
            labelId="radioPct"
            name="radioPct"
            value1Radio="Sim"
            value2Radio="Não"
            value={formik.values.radioPct}
            handleChange={formik.handleChange}
          />
        </Grid>
        {formik.values.radioPct === "Não" && (
          <Grid item xs={6} className="pt8">
            <TextField
              id="percentage"
              name="percentage"
              value={formik.values.percentage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.percentage}
              helperText={formik.errors.percentage}
              label="Porcentagem"
              placeholder="Informe a porcentagem mínima"
              autoComplete="off"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              fullWidth
            />
          </Grid>
        )}
        <Grid item xs={12} className={classes.ctnButton}>
          <Button
            id="searchbtn"
            color="primary"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            <Typography variant="caption" fontWeight="bold">
              Calcular
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Form;
