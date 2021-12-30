import { createLogger, format, transports } from 'winston';

const isObject = obj => obj.constructor === Object;

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format(options => {
      const { message, ...otherProps } = options;
      if (isObject(message)) {
        return {
          ...otherProps,
          ...message,
        };
      } else {
        return options;
      }
    })(),
    format.timestamp({
      alias: '@timestamp',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: 'pilot' },
  transports: [
    new transports.File({
      filename: `logs/${process.env.NODE_ENV}.log`,
      maxsize: 5000000, // 5MB, just because
      maxFiles: 2,
      tailable: true,
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          info =>
            `[${new Date().toLocaleTimeString()}] ${
              info.level
            }: ${info.message || info.url}`,
        ),
      ),
    }),
  );
}

export const addLogger = (req, res, next) => {
  req.logger = logger.child({
    url: req.url,
    method: req.method,
    query: req.query,
    body: req.body,
  });
  req.startTime = process.hrtime();
  next();
};

export default logger;
