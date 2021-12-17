import instanceCreateDream from './createDream';
import instanceDreamDb from '../../models/dream/';
import { DREAM_ERRORS as errors } from '../../errors/dream';

const createDream = instanceCreateDream({
  dependencies: {
    model: instanceDreamDb,
    errors,
  },
});

const dream = Object.freeze({
  createDream,
});

export default dream;
export { createDream };
