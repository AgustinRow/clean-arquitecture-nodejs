import logger from './';
import { safeStringify } from '../helpers/safeStringify';

export const logRequest = (req, tx, localTx) => {
  logger.info(
    safeStringify({
      request: req.method,
      tx,
      localTx,
      body: req.body,
      query: req.query,
      params: req.params,
    }),
  );
};

export const logResponse = (startTime, tx, localTx, response, status) => {
  const [secs, nanos] = process.hrtime(startTime);
  logger.info(
    safeStringify({
      status,
      tx,
      localTx,
      duration: secs * 1000 + nanos / 1000000,
      body: response,
    }),
  );
};

export const logError = (error, startTime, tx, localTx) => {
  const [secs, nanos] = process.hrtime(startTime);
  logger.error(
    error +
      safeStringify({
        tx,
        localTx,
        duration: secs * 1000 + nanos / 1000000,
      }),
  );
};
