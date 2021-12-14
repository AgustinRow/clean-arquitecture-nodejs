const createDreamController = dependencies => async req => {
  const { createDream } = dependencies;
  const { body: createParams } = req;
  const dream = await createDream({ createParams }).catch(error => {
    error.message = `dream.${error.message}`;
    throw error;
  });
  return { response: { dream, status: 201 } };
};

export default createDreamController;
