const { Manufacturer } = require("../../model");
const { notFound } = require("../../utils/error");
const { findModels } = require("../model");

const findAll = async () => {
  return await Manufacturer.find().select('name country');
};

const findSingle = async ({ id }) => {
  const manufacturer = await Manufacturer.findById(id).select('name country');
  if (!manufacturer) throw notFound();

  // Find models that belong to the manufacturer
  const models = await findModels(id);

  return { manufacturer, models };
};

module.exports = { findAll, findSingle };
