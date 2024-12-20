const { Model: CarModel } = require("../../model");
const { notFound } = require("../../utils/error");
const { findYears } = require("../year");


const findModels = async (manufacturerId) => {
  const models = await CarModel.find({ manufacturer: manufacturerId }).select('name manufacturer');
  if (!models) {
    throw notFound("No models found for this manuafacturer");
  }
  return models;
};

const findSingle = async ({ id }) => {
  const model = await CarModel.findById(id).select('name manufacturer');
  if (!model) throw notFound();

  // Find models that belong to the manufacturer
  const years = await findYears(id)

  return { model, years };
};


module.exports = { findModels, findSingle };
