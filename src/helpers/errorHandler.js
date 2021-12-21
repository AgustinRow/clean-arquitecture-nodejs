import { validationResult } from 'express-validator';
import { errorFromKey } from '../errors';

export const error = (res, key, statusCode = 400) => {
  const error = errorFromKey(key);
  return res.status(statusCode).json({ error: error });
};

export const errorPresent = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return null;
  }
  const error = errorFromKey(errors.array()[0].msg);
  res.errorBody = error;
  return res.status(400).json({ error: error });
};
