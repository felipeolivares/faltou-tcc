const removeSpecialCharsAndNumbers = (value: string) => {
  if (!value) {
    return "";
  }
  return value.replace(/[^a-zA-Z ]/g, "");
};

export default removeSpecialCharsAndNumbers;
