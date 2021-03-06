import entity from '../../entities/dream';

const createDream = ({ dependencies }) => async ({ createParams }) => {
  const { model, errors } = dependencies;
  const dream = entity(createParams);

  const craetedDream = await model.create(dream);

  return craetedDream;
};

export default createDream;
