import Joi from 'joi';


export const barChartSchema = Joi.object({
  type: Joi.string().valid("pie", "bar", "line").required(),
  title: Joi.string().required(),
  columnNumber: Joi.number().min(1).max(20).required(),
  columnNames: Joi.array().items(Joi.string()).length(Joi.ref('....columnNumber')).required(),
  columnColors: Joi.array().items(Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)).length(Joi.ref('....columnNumber')).required(),
  columnValues: Joi.array().items(Joi.number()).length(Joi.ref('....columnNumber')).required()
});

