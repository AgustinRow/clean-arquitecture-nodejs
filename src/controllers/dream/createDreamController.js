//FIXME: res.status... should be here??
const createDreamController = dependencies => async event => {
  const response = event;
  console.log(event);
  return {
    statusCode: 200,
    body: response,
  };
  /*  const { createDream } = dependencies;
  const { body: createParams } = req;
  const dream = await createDream({ createParams }).catch(error => {
    error.message = `dream.${error.message}`;
    throw error;
  });
  return { response: { dream }, status: 201 }; */
};

export default createDreamController;
