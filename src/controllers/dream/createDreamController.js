const createDreamController = dependencies => async ({
  hoursSlept,
  quality,
  date,
}) => {
  const { createDream } = dependencies;
  //aca deberia valdiar con joi
  const dream = await createDream({ hoursSlept, quality, date }).catch()
  return { response: { dream }, status: 201 };
};

export default createDreamController;
