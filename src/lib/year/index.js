const { Year } = require("../../model");
const { notFound } = require("../../utils/error");

const findYears = async (modelId) => {
  const years = await Year.find({ models: modelId }).select('year');
  if (!years) {
    throw notFound("No years found for this model");
  }
  return years;
};


module.exports = { findYears };
