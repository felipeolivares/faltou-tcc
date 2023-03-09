const dateToString = (stringDate: string) => {
  if (!stringDate) {
    return new Date();
  }
  const splittedDate = stringDate.split("/");
  const day = Number(splittedDate[0]);
  const month = Number(splittedDate[1]) - 1;
  const year = Number(splittedDate[2]);

  return new Date(year, month, day);
};

export default dateToString;
