const { Schema, model } = require('mongoose');

const yearSchema = new Schema(
  {
    year: {
      type: Number,
      required: true,
    },
    models: [
      {
        type: Schema.ObjectId,
        ref: 'Model',
      },
    ],
  },
  { timestamps: true, id: true }
);

const Year = model('Year', yearSchema);

module.exports = Year;

