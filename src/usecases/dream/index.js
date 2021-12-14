import instanceCreateDream from './createDream';
import instanceDreamDb from '../../models/';
import { DREAM_ERRORS as errors } from '../../errors/dream';

const createDream = instanceCreateDream({
  dependencies: {
    model: instanceDreamDb,
    errors,
  },
});

//por que hace un freeze del objeto??
const dream = Object.freeze({
  createBussines,
});

//No se porque los exporta de estas dos formas??
export default dream;
export { createDream };
