const dreamEntity = ({ errors }) => ({ id, hour, date }) => {
  if (!hour) {
    console.error(errors.hour.text);
    throw new Error(errors.hour.name);
  }
  if (!date) {
    console.error(errors.date.text);
    throw new Error(errors.date.name);
  }

  return Object.freeze({
    id,
    hour,
    date,
  });
};

export default dreamEntity;
