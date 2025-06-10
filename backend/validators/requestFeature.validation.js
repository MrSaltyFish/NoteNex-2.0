import Joi from "joi";

export const requestValidationSchema = Joi.object({
  title: Joi.string().max(200).trim().required(),
  description: Joi.string().max(1000).trim().required(),
  phoneNumber: Joi.string()
    .pattern(/^[6-9]\d{9}$/)
    .allow("", null)
    .optional()
    .messages({
      "string.pattern.base": `"phoneNumber" must be a valid 10-digit Indian mobile number`,
    }),
});
