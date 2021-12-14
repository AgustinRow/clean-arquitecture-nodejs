import { createDream } from '../../usecases/dream';
import createDreamController from './createDreamController';

const createDreamControllerInstance = createDreamController({
  createDream,
});

const dreamController = Object.freeze({
    createDreamControllerInstance,
});

export default dreamController;
export { createDreamControllerInstance };
