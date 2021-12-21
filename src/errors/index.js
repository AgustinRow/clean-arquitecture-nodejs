import { DREAM_ERRORS } from './dream';

const errorsFromList = (errorList, baseCode) => {
  const errors = {};
  if (!Array.isArray(errorList)) {
    Object.keys(errorList).forEach((error, index) => {
      errors[errorList[error].name] = {
        message: errorList[error].text,
        code: baseCode + index,
      };
    });
  } else {
    errorList.forEach((error, index) => {
      errors[error[0]] = {
        message: error[1],
        code: baseCode + index,
      };
    });
  }

  return errors;
};

const errors = {
  dream: errorsFromList(DREAM_ERRORS, 100),
};

export const errorFromKey = key => {
  const [base, errorKey] = key.split('.');
  return (
    errors[base][errorKey] || {
      message: key,
      code: 0,
    }
  );
};
