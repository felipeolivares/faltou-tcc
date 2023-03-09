import { appValues } from "models/appValues";

const formValidate = (values: appValues) => {
  let hasError = false;
  const errors = {
    subject: "",
    startClasses: "",
    finishClasses: "",
    amountDaysClasses: "",
    amountAbsence: "",
    radioholiday: "",
    holiday: "",
    radioPct: "",
    percentage: "",
  };

  if (!values.subject) {
    errors.subject = "Campo obrigatório";
    hasError = true;
  }
  if (!values.startClasses) {
    errors.startClasses = "Campo obrigatório";
    hasError = true;
  }
  if (!values.finishClasses) {
    errors.finishClasses = "Campo obrigatório";
    hasError = true;
  }
  if (!values.amountDaysClasses) {
    errors.amountDaysClasses = "Campo obrigatório";
    hasError = true;
  }
  if (!values.amountAbsence) {
    errors.amountAbsence = "Campo obrigatório";
    hasError = true;
  }
  if (!values.radioholiday) {
    errors.radioholiday = "Campo obrigatório";
    hasError = true;
  }
  if (!values.holiday && values.radioholiday === "Sim") {
    errors.holiday = "Campo obrigatório";
    hasError = true;
  }
  if (!values.radioPct) {
    errors.radioPct = "Campo obrigatório";
    hasError = true;
  }
  if (!values.percentage && values.radioPct === "Não") {
    errors.percentage = "Campo obrigatório";
    hasError = true;
  }
  return hasError ? errors : false;
};

export default formValidate;
