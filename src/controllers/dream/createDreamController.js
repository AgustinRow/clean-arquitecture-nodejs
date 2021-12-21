//FIXME: res.status... should be here??
const createDreamController = dependencies => async (req, res) => {
  const { createDream } = dependencies;
  const { body: createParams } = req;
  const dream = await createDream({ createParams }).catch(error => {
    error.message = `dream.${error.message}`;
    throw error;
  });
  return { response: { dream }, status: 201 };
  //res.status(201).json(dream);
};

export default createDreamController;
