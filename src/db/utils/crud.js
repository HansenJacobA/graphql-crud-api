export const getOne = model => async (input) => {
  try {
    const doc = await model
      .findOne(input)
      .lean()
      .exec();

    return doc;
  } catch (e) {
    console.error(e);
  }
};

export const getMany = model => async (input) => {
  try {
    const docs = await model
      .find(input)
      .lean()
      .exec();

    return docs;
  } catch (e) {
    console.error(e);
  }
};

export const createOne = model => async (input) => {
  try {
    const doc = await model.create(input);

    return doc;
  } catch (e) {
    console.error(e);
  }
};

export const updateOne = model => async (input, change) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        input,
        change,
        { new: true }
      )
      .lean()
      .exec();

    return updatedDoc;
  } catch (e) {
    console.error(e);
  }
};

export const removeOne = model => async (input) => {
  try {
    const removed = await model.findOneAndRemove(input);

    return removed;
  } catch (e) {
    console.error(e);
  }
};

export const crudControllers = model => ({
  createOne: createOne(model),
  getOne: getOne(model),
  getMany: getMany(model),
  updateOne: updateOne(model),
  removeOne: removeOne(model)
});
