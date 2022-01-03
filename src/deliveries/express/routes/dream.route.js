import express from 'express';
//import { createDreamControllerInstance } from '../../../controllers/dream';
//import Base from '../executeHelper';

//const router = express.Router();

//router.post('/', Base.execute(createDreamControllerInstance));
//router.get('/');

//module.exports.postDream = createDreamControllerInstance;
module.exports.health = async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify('Hello word'),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
};
/* module.exports.getDream = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({ dream: event.pathParameters.id }),
  };
}; */

//export default router;
