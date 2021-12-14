import db from './index';

export const Tables = {
  dream: 'dreams',
};

class Model {
  constructor(tableName, instanceDb) {
    (this.tabe = tableName), (this.instanceDb = instanceDb);
  }
}
