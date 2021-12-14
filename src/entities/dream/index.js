import dreamEntity from './dreamEntity';
import { DREAM_ERRORS } from '../../errors/dream';

const dreamEntityInstance = dreamEntity({ errors: DREAM_ERRORS });

export default dreamEntityInstance;
