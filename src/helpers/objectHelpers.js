import snakeCaseKeys from 'snakecase-keys';
import camelcaseKeys from 'camelcase-keys';
const keysToCamel = (hash) => {
  return camelcaseKeys(hash);
};

const keysToSnake = (hash) => {
  return snakeCaseKeys(hash);
};

export { keysToCamel, keysToSnake };
