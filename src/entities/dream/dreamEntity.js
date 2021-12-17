const dreamEntity = ({ errors }) => ({ id, hours, date }) => {
  if (!hours) {
    console.error(errors.hour.text);
    throw new Error(errors.hour.name);
  }
  if (!date) {
    console.error(errors.date.text);
    throw new Error(errors.date.name);
  }

  return Object.freeze({
    hours,
    date,
  });
};

export default dreamEntity;
