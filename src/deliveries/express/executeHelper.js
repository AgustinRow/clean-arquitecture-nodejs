import * as uuid from 'uuid';
import { logRequest, logResponse, logError } from '../../logger/expressLog';
import { keysToCamel, keysToSnake } from '../../helpers/objectHelpers';
import { error as errorFormat } from '../../helpers/errorHandler';

const execute = functionController => {
  return async (req, res, next) => {
    const tx = req.body.tx || null;
    const localTx = uuid.v4();
    const startTime = process.hrtime();
    try {
      delete req.body.tx;
      logRequest(req, tx, localTx);
      req.body = keysToCamel(req.body);
      req.query = keysToCamel(req.query);
      req.params = keysToCamel(req.params);
      req.headers = keysToCamel(req.headers);
      let { response, status } = await functionController(req, res, next);
      status = status || 200;
      response = keysToSnake(response);
      logResponse(startTime, tx, localTx, response, status);
      res.status(status).send({ ...response });
    } catch (error) {
      console.log(error);
      logError(error.message, startTime, tx, localTx);
      next(errorFormat(res, error.message));
    }
  };
};

export default {
  execute,
};
