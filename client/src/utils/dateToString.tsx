const dateToString = (date: Date) => {
  if (!date || date === null) {
    return "";
  }

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + "").padStart(2, "0");
  const yyyy = date.getFullYear();

  return dd + "/" + mm + "/" + yyyy;
};

export default dateToString;
